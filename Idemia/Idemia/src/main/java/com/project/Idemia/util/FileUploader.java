package com.project.Idemia.util;

import com.project.Idemia.custom_exception.PersonNotFound;
import com.project.Idemia.models.Person;
import com.project.Idemia.models.PersonImg;
import com.project.Idemia.repository.PersonImgRepo;
import com.project.Idemia.repository.PersonRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;

@Component
public class FileUploader {
    @Autowired
    PersonImgRepo image;
    @Autowired
    PersonRepo personRepo;
// public String UPLOAD_DIR="C:\\JavaPrg\\Idemia\\src\\main\\resources\\static\\images";
//public String UPLOAD_DIR=new ClassPathResource("static/images/").getFile().getAbsolutePath();

    public FileUploader() throws IOException {
    }
    public boolean upload(MultipartFile file,int id) throws PersonNotFound {
        Person person= personRepo.findById(id).orElse(null);

        if(person==null){
            throw new PersonNotFound("Person Not Found!");
        }

     boolean f=false;
      try{
       InputStream is=file.getInputStream();
       byte[] data=new byte[is.available()];
          try {

              is.read(data);
              String image64= Base64.getEncoder().encodeToString(data);
              PersonImg personImg=new PersonImg();
              personImg.setBase64Image(image64);
              image.save(personImg);
              person.setImg(personImg);
              personRepo.save(person);

          } catch (IOException e) {
              throw new RuntimeException(e);
          }

       f=true;

      } catch (Exception e){
          System.out.println(e);
      }

  return f;
 }
}
