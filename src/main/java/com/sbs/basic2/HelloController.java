package com.sbs.basic2;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HelloController {
  int no = 0;

  @GetMapping("/usr/hello")
  @ResponseBody
  public String Hello() {
    return "Hello World";
  }

  @GetMapping("/usr/increase")
  @ResponseBody
  public int increaseNo() {
    no++;

    return no;
  }

  @GetMapping("/usr/decrease")
  @ResponseBody
  public int decreaseNo() {
    no--;

    return no;
  }

  @GetMapping("/usr/reset")
  @ResponseBody
  public int resetNo() {
    no = 0;

    return no;
  }
}
