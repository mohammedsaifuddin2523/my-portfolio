import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Read data from Google spreadsheet in Angular',
      desc: '',
      livedemo: 'https://mehulk05.github.io/MyShop/#/',
      githurl: 'https://github.com/mehulk05/MyShop',
      mediumlink: 'https://itnext.io/read-data-from-google-spreadsheet-in-angular-209ee74b6cb4',
      imgUrl: 'assets/images/z1.png',
      tech: 'Angular 10 , Google SpreadsheetApi'
    },

    {
      id: 2,
      title: 'Blog App Using MERN Stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blogapp-using-MERN/#/',
      githurl: 'https://github.com/mehulk05/Blogapp-using-MERN',
      mediumlink: 'https://itnext.io/blog-app-using-mern-stack-b0b4d69d7ea1',
      imgUrl: 'assets/images/z26.png',
      tech: 'React, Node, MongoDB, Express'
    },


    {
      id: 3,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-using-mean/#/',
      githurl: 'https://github.com/mehulk05/Blog-using-mean',
      mediumlink: 'https://itnext.io/crud-operation-using-mean-stack-7dfa2f51ec8c',
      imgUrl: 'assets/images/z27.png',
      tech: 'Angular 10, Node, MongoDB, Express'
    },

    {
      id: 4,
      title: 'Multiroom Chat Application in Node JS',
      desc: '',
      livedemo: 'https://chatapp-using-node.herokuapp.com/',
      githurl: 'https://github.com/mehulk05/Chat-app-using-Nodejs',
      mediumlink: 'https://medium.com/weekly-webtips/building-a-multiroom-chat-application-in-node-js-8a8adca5acf2',
      imgUrl: 'assets/images/z23.png',
      tech: 'Node JS,Socket IO'
    },


    {
      id: 5,
      title: 'Integrate Medium Blogs on your React App',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Medium-Blog-On-React-App#/',
      githurl: 'https://github.com/mehulk05/Medium-Blog-On-React-App',
      mediumlink: 'https://javascript.plainenglish.io/how-to-add-medium-blogs-on-your-react-app-a3898a729aad',
      imgUrl: 'assets/images/z4.png',
      tech: 'React JS'
    },



    {
      id: 6,
      title: 'News App using ReactJS (Parsing XML to JSON)',
      desc: '',
      livedemo: 'https://mehulk05.github.io/NewsApp-using-React',
      githurl: 'https://github.com/mehulk05/NewsApp-using-React',
      mediumlink: 'https://codeburst.io/news-app-using-reactjs-f9752d7ab6ce',
      imgUrl: 'assets/images/z24.png',
      tech: 'React JS, XMl to JSON'
    },



    {
      id: 7,
      title: 'Medium-Like Blog App Using Angular 9 and Firebase',
      desc: '',
      livedemo: 'https://mehulk05.github.io/Blog-Book/',
      githurl: 'https://github.com/mehulk05/Blog-Book',
      mediumlink: 'https://codeburst.io/blogging-app-using-angular-9-and-firebase-98e36168d850',
      imgUrl: 'assets/images/z21.png',
      tech: 'HTML, Bootstrap, CSS, Angular-9, Firebase'
    },



    {
      id: 8,
      title: 'COVID 19 Tracker (Statistics) app Using Angularr',
      desc: '',
      livedemo: 'https://mehulk05.github.io/COVOID-19/',
      githurl: 'https://github.com/mehulk05/COVOID-19',
      mediumlink: 'https://codeburst.io/covoid-19-tracker-statistics-app-using-angular-2358347b3d1f',
      imgUrl: 'assets/images/z2.png',
      tech: 'Angular 10 ,Bootstrap,Javascript'
    },


    {
      id: 9,
      title: 'Weather App with React',
      desc: '',
      livedemo: 'https://mehulk05.github.io/React-Weather/',
      githurl: 'https://github.com/mehulk05/React-Weather-App',
      mediumlink: 'https://medium.com/analytics-vidhya/weather-app-with-react-adaa7268bbdb',
      imgUrl: 'assets/images/z9.png',
      tech: 'React, Open MAp Api'
    },


    {
      id: 10,
      title: 'Spring Boot + Angular 8 CRUD Example',
      desc: '',
      livedemo: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      githurl: 'https://github.com/mehulk05/Spring-Boot-Angular-8-CRUD-Example',
      mediumlink: 'https://medium.com/analytics-vidhya/spring-boot-angular-8-crud-example-8aeafd47b54',
      imgUrl: 'assets/images/z28.png',
      tech: 'Angular8, Java ,Hibernate'
    },


    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/Personal-Portfolio-Angular-Updated',
      mediumlink: 'https://javascript.plainenglish.io/personal-portfolio-using-angular-8-and-bootstrap-5dde6fc7cf9b',
      imgUrl: 'assets/images/z11.png',
      tech: 'Angular ,Bootstrap'
    },


    {
      id: 12,
      title: 'Personal Portfolio Using Django',
      desc: '',
      livedemo: 'https://personal-portfolio0320.000webhostapp.com/',
      githurl: 'https://github.com/mehulk05/My-Personal-Portfolio',
      mediumlink: 'https://mehulkothari05.medium.com/personal-portfolio-using-django-dba49c355905',
      imgUrl: 'assets/images/z12.png',
      tech: 'Django'
    },

    {
      id: 13,
      title: 'Movie Success Prediction',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05',
      mediumlink: 'https://mehulkothari05.medium.com/movie-success-prediction-a67d871a7b1',
      imgUrl: 'assets/images/z13.png',
      tech: 'Python, Machine Learning, Django Framework.'
    },

    {
      id: 14,
      title: 'Matrimonial Website',
      desc: '',
      livedemo: 'https://mehulkothari05.medium.com/',
      githurl: 'https://github.com/mehulk05/Matrimonial-Website.git',
      mediumlink: 'https://mehulkothari05.medium.com/matrimonial-website-9cd5247f477d',
      imgUrl: 'assets/images/z14.png',
      tech: 'HTML, CSS, Bootstrap, Jquery'
    },

  ]
  about2 = `Software Engineer with 1.9+  years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in C# , Angular , MVC , ASP.Net Core,JavaScript . 
  Have good understanding of  Jquery, Bootstrap , and MSSQL.`

  about = "Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1POKgqgQ3fPmnSOD0djZMiL_ylB9ahsGA/view?usp=drivesdk"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR ',
      'progress': '75%'
    },
    {
      'id': '2',
      'skill': 'C#',
      'progress': '75%'
    },
    {
      'id': '3',
      'skill': 'MVC',
      'progress': '70%'
    },
    {
      'id': '4',
      'skill': '.Net framwork',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'SQL , MSSQL',
      'progress': '70%'
    },
    {
      'id': '6',
      'skill': 'JAVASCRIPT JQUERY#',
      'progress': '70%'
    }
  ];


  educationData: any = [
    {
      
      'id': '1',
      'from_to_year': '2019 - 2022',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology',
      'info': `J.B  Institute of Engineering & Technology is JNTUH Affiliated and ranks  Top 10 in Hyderabd
Completed B.Tech in Electonics & Communication Engineering with 8.15 CGPA.
Maintained above 7.1 spi in every semester of college academic .`,
      'institution': 'J.B INSTITUTE OF ENGINEERING & TECHNOLOGY, HYDERABAD'
    },
    {
      'id': '2',
      'from_to_year': '2016 - 2019',
      'education': 'Diploma',
      'stream': 'Electonics & Communication Engineering',
      'institution': 'Quli Qutub Shah Govt Polytechnic',
      'info': `Q.Q Govt Polytechnic is Affiliated  with "SBTET".
Completed my diploma in Electonics & Communication Engineering with 80.54%.
Won the Best Project Expo Award in Project Expo at college`
    },
    {
      'id': '3',
      'from_to_year': '2015 - 2016',
      'education': 'Secondary  School',
      'stream': 'TOSS',
      'institution': 'Royal Afham Islamic English High School',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 6.8 GPA.`
    }
  ];
  exprienceData: any = [
    {
      id: 4,
      company: 'Audree InfoTech PVT .LTD',
      location: 'Hyderabad',
      timeline: 'Dec 2022 to Present',
      role: 'Software Engineer',
      work: `Technologies : C#,.NET Framwork ,Angular ,.NET Core , MS SQL .
      Working as a.NET full stack developer .Responsible for design & development of web pages from Mock-ups.
      Expertise creating user validation forms and sending data to server using RESTful services .
      Experience in using Chrome Developer Tools and Firebug for debugging and troubleshooting the code. 
      Worked on Swagger Tool for Web API and extensively worked on DDD Pattern Architecture for Project Development. 
      `

    },
    {
      id: 3,
      company: 'Audree InfoTech PVT .LTD',
      location: 'Hyderabad',
      timeline: 'Aug 2022 to Dec 2022',
      role: 'Trainee Software Engineer',
      work: `Technologies : C#,.NET Core , MVC ,Angular , MS SQL .
      Worked on the web application built in Angular for different business and Campaigns .
      Experience of ORM using Entity Framework Core, and Lambda Expressions used in LINQ.
      `
    },
  //   {
  //     id: 2,
  //     company: 'Growth99',
  //     location: 'Remote',
  //     timeline: '',
  //     role: 'Frontend  Developer',
  //     work: `Technologies : Angular , Node JS , MongoDB .
  // Worked on the product of Growth99 which allowed other clients to come and integrate our product in their website .
  // Worked on REST Api , Admin Dashboard , Appointment Booking for services and UI of the application .
  // Created sections like templates for email, sms, landing pages, clinic, services, providers and triggers Automation.
  // `
  //   },

  //   {
  //     id: 1,
  //     company: 'Saif Consultancy Services',
  //     location: 'Gandhinagar and Pune',
  //     timeline: 'June 2019 - Jan 2021',
  //     role: 'Assistant System Engineer Trainee',
  //     work: `Technologies : Angular , JavaSpring Boot , SQL. Apache Solr .

  // Project 1 : Worked on uploading two excel sheets with bulk of data and finding the matches for each business .

  // Project 2 : Worked on indexing the search results inside the application with bulk of data using Apache Solr and configuring the server with cron jobs and shell scripts .

  // Worked on ranking the search results based on various criteria,features and delivering the accurate results based on generated scores.
  // `
  //   },


  ]


projectData:any=[
  {
    id: 4,
    project: 'Sample Management System (SMS) ',
    // location: '',
    technology: 'ANGULAR 12, .NET Core 3.1, C#, Entity Framework Core 3.1 ,MS SQL',
    client: 'Hetero Drugs Pvt Ltd.  ',
    description: ` The system shall be designed to automate the process of generating unique analytical report no. for samples that are registered for testing and to trace the status of registered samples. 
    `
  },
  {
    id: 3,
    project: 'Incident Management System (IMS) ',
    // location: '',
    technology: '.NET Core 2.2, C#, LINQ, Entity Framework Core ',
    client: 'Hetero Drugs Pvt Ltd,Honour Labs Pvt Ltd & Dasami Labs Pvt Ltd ',
    description: ` Incident Management software helps the team respond to, and investigate incidents across your entire supply chain in one application.
    Increase the visibility into risks with a fully documented record of events for every incident in the organization. Our Incident and Investigations Management Software makes it easy for the end users to accurately capture the incident data needed. Data entry forms are tailored for each type of user, ask only for the required data, and have built-in guidance.
    `
  },
  {
    id: 2,
    project: 'Batch Record Management System (e-BRMS) ',
    // location: '',
    technology: 'ANGULAR 12, .NET Core 3.1, C#, Entity Framework Core 3.1  ',
    client: 'Hetero Drugs Pvt Ltd.  ',
    description: ` The purpose of the e-BRMS project is to request, prepare, approve, make effective, and issue master production records with review, validation batch assign, and approval by assigning a batch number for each issuance. Provides print, reprint, and additional pages for the master batch record. Batch completion by assigning manufacture and expiry dates to BMR and BPR records with review and approval. Batch Record Closure with the attachment of the Executed Document with HOD approval. It provides space to cancel the batch record before and after printing. Even, allows for the ratification, Obsolete, and Supersede of the master record with capture of Audit Trail.
    `
  },
  {
    id: 1,
    project: 'Automate 365',
    // location: '',
    technology: 'ANGULAR 12, .NET Core 3.1, C#, Entity Framework Core 3.1  ',
    client: 'Audree Infotech Pvt Ltd. ',
    description: `Automate 365 is a learning resources
    application which features learning management, course work,
    testing system for the courses in which the associate is enrolled. I
    had worked on implementing test environment, assessing
    candidate's responses and producing results along with course work
    management and taking appropriate measures by the user for
    completion of courses.
    `
  },
]
  extraCircularInfo: any = [


  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  project(): Observable<any> {
    // return this.http.get(this.baseUrl + 'project');
    return this.projectData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
