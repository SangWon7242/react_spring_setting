package com.sbs.basic2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
  @GetMapping("/usr/hello")
  @ResponseBody
  public String Hello() {
    return "Hello World";
  }
}
