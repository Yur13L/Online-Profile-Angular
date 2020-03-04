import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-work',
  templateUrl: './area-work.component.html',
  styleUrls: ['./area-work.component.css']
})
export class AreaWorkComponent implements OnInit {

  public companyDetailItems:CompanyDetails[] = [
    {
      companyName:"Allied Telesis Labs",
      companySummary:"Network infrastructure/telecommunications company.",
      companyLogoImgPath:"assets/img/companylogo/logo-alliedtelesis.png"
    },
    {
      companyName:"Accenture",
      companySummary:"Multinational professional services company.",
      companyLogoImgPath:"assets/img/companylogo/logo-accenture.jpg"
    },
    {
      companyName:"Conway Group",
      companySummary:"Kart racing group of companies.",
      companyLogoImgPath:"assets/img/companylogo/logo-mimirbox.png"
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}

interface CompanyDetails {
  companyName:string,
  companySummary:string,
  companyLogoImgPath:string
}

interface WorkExperience {
  companyName:string,
  position:string,
  location:string,
  workdate:string
  tech:string,
  description:string,
  projects:ProjectExperience[]
}

interface ProjectExperience {
  projectName:string,
  description:string,
  tasks:string[]
}

let workData = [
  {
    "company": "Accenture",
    "position": "Applications Development Analyst",
    "location": "Philippines",
    "workdate": "June 2015 - June 2016",
    "tech": "Technologies:<br>Java SE, Java EE (JAX-RS, JAX-WS, JPA), Spring, Hibernate, AngularJS, BootstrapCSS, Oracle SQL, JUnit, SoapUI, VirtualBox, Subversive (Eclipse SVN),Maven, Jenkins,VirtualBox, IDEs(Eclipse, NetBeans), Tomcat.",
    "projects": "Projects:<br>Insurance Management System(Web Application)<br>Insurance Claims System(Web Application)<br>Investment Risk Calculator(IPad Application)",
    "details": {
      "briefdesc": "I worked in 3 Projects, all are web applications and web services related to insurance and built using different Java frameworks. I developed components needed for the application; whether it is for a backend or frontend component. These include creating test scripts, testing per component and fixing bugs that testers discovered upon reviewing the application.",
      "subproj" : [
        {
          "name" : "Brazil Insurance Company",
          "desc" : "Was assigned to a web application that is built using different Java Frameworks: Java EE, Spring, Hibernate. Also this application uses SOAP and REST web services. On the frontend side AngularJS and Bootstrap CSS is used. It functions as an online claims system for insurance.",
          "taskdesc" : [
            "Develop dynamic pages(Controller, Routes, Templates) using AngularJS and format it to have a user friendly design with BootstrapCSS.",
            "Fix bugs found on the system based on priority",
            "Package and deploy new versions of the application using Jenkins",
            "Use of Google Chrome debug tools to analyze request sent and data received"
          ]
        },
        {
          "name" : "Switzerland Bank Company",
          "desc" : "I was assigned to an iPad application that connects to a web service (REST). The application runs on iPad by using the Cordova framework. I used frameworks such as AngularJS and BootstrapCSS during my employment.",
          "taskdesc" : [
           "Develop dynamic pages(Controller, Routes, Templates) using AngularJS and format it to have a user friendly design with BootstrapCSS.",
           "Fix bugs found on the system based on priority",
           "Package and deploy new versions of the application using Jenkins",
           "Use of Google Chrome debug tools to analyze request sent and data received"
          ]
        },
        {
          "name" : "China Insurance Company",
          "desc" : "I had been assigned to a web application that uses different Java Frameworks, like: Spring, Struts, Hibernate and JasperReports. It functions as an online claims system for insurance companies.",
          "taskdesc" : [
            "Fix bugs found on the system based on priority",
            "Create hibernate mappings for entities that are not aligned to the database",
            "Update fields and logic on Jasper templates",
            "Develop new JSP templates for application use"
          ]
        }
      ]

    }
  },
  {
    "company": "Allied Telesis",
    "position" : "Software Engineer",
    "location" : "Philippines",
    "workdate": "July 2012 - May 2015",
    "tech" : "Technologies:<br>Java SE, Java SE(Swing), Hibernate, Netbeans, Postgresql, TortoiseGIT, Rational Clear Case, Putty, TeraTerm, VirtualBox, Network Protocols",
    "projects": "Projects:<br>Network Management System 14.1 to 15.2<br>",
    "details" : {
      "briefdesc" : "I was assigned to add modules to support functionality of specific routers to a network management system from version 14.1 to 15.2 that is built using Java. Also, to fix logged bugs found by the testing team. Reading the functional requirements of the planned device to be supported, I create technical designs needed to meet the requirements.",
      "taskdesc" : [
        "Parse switch and router CLI Telnet results using Regex(Regular Expression)",
        "Developed numerous device support for the management system",
        "Fixed various bugs by priority logged on the bug tracking system",
        "Investigated device firmware bugs using network tools such as Wireshark and Putty to determine the problem that affects the network management system",
        "Update codes on the versioning system using TortoiseGIT",
        "Local test changes on the application on different operating system using VirtualBox"
      ]
    }

  }
];