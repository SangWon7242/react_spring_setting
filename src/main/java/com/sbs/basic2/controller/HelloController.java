package com.sbs.basic2.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
  int no = 0;

  @GetMapping("/usr/hello")
  public String Hello() {
    return "반가워";
  }

  @GetMapping("/usr/increase")
  public int increaseNo() {
    no++;

    return no;
  }

  @GetMapping("/usr/decrease")
  public int decreaseNo() {
    no--;

    return no;
  }

  @GetMapping("/usr/reset")
  public int resetNo() {
    no = 0;

    return no;
  }

  @GetMapping("/usr/write")
  public void doWrite(String title, String body) {

  }
}
