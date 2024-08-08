package com.project.Idemia.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class Home {
    @GetMapping("/")
    public ModelAndView showForm(){
        ModelAndView mv=new ModelAndView();
        mv.setViewName("homepage");
        return mv;
    }

}
