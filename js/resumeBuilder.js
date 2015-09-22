var bio = {
	"name": "Mike Doino",
	"role": "Front End Web Developer",
	"contacts" : {
		"mobile": "(914) 854-9873",
		"email": "mickeydo@bww.com",
		"location": "White Plains, NY"
	},
	"picture" : "images/mike1.jpg",
	"message" : "Welcome to Mike's Bio Page",
	"skills" : ["HTML", "CSS", "jQuery", "Javascript"]
}; /* bio */

bio.display = function() {
	HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role) ;
	HTMLheaderName = HTMLheaderName.replace("%data%", bio.name) ;

	$("#header").prepend(HTMLheaderRole) ;
	$("#header").prepend(HTMLheaderName) ;

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart) ;

		var formattedSkill="";
		for (var i=0; i < bio.skills.length; i++) {
			formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		} /* for */
	} /* if */

   var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
   $("#topContacts").append(formattedMobile);
   $("#footerContacts").append(formattedMobile);

   var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
   $("#topContacts").append(formattedEmail);
   $("#footerContacts").append(formattedEmail);

   var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
   $("#topContacts").append(formattedLocation);
   $("#footerContacts").append(formattedLocation);

   var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
   var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.message);
   $("#topContacts").after(formattedBioPic + formattedWelcomeMsg);
}; /* bio.display() */


var work = {
	"jobs": [
		{
		"employer": "Headway Solutions",
		"title": "Front End Web Developer",
		"location": "White Plains, NY",
		"dates": "July 2014 to Present",
		"description": "Front End Web Developer converting print version of text books to online text books using HTML, CSS, jQuery and javascript."
		},
		{
		"employer": "Royal Consumer Products",
		"title": "Front End Web Developer",
		"location": "Fairfield, CT",
		"dates": "December 2013 to June 2014",
		"description": "Hands on cross browser web developer in HTML, CSS, javascript, jQuery and php.  Responsible for the development and marketing of iClicknPrint.com, an online printing application.  Managed a development team in India and QA team in Romania.   Also developed and implemented a social media strategy.  Used Photoshop to create transparencies, resize images and create storyboards.  Designed and built an online catalog web application using HTML5, css3, php and mySql."
		},
		{
		"employer": "Robert Half Technology at River Bend Center",
		"title": "Front End Web Developer",
		"location": "Stamford, CT",
		"dates": "July 2013 to September 2013",
		"description": "Developed a series of new designs for the River Bend Center web site.  Worked with a photographer to provide several possible website redesigns that centered around images of the buildings.  Worked with HTML, CSS and PHP.  Hand coded HTML and CSS in conjunction with Bootstrap.js."
		}
	]
}; /* work */

work.display = function() {
	for (var job=0; job < work.jobs.length; job++) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) ;
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title) ;
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedWorkInfo = formattedEmployer+formattedTitle+formattedLocation+formattedDates+formattedDescription ;
		$(".work-entry:last").append(formattedWorkInfo);
	} /* for */
}; /* work.display() */


var education = {
	"schools": [
		{
		"name": "Columbia University",
		"location": "New York, NY",
		"degree": "BA",
		"majors": ["Computer Science", " Biology/Pshychology"],
		"dates": "September 1979 to May 1983",
		"url": "http://www.columbia.edu/"
		}
	] /* schools */,

	"onlineCourses": [
		{
		"title": "Nanodegree - Front End Web Development",
		"school": "Udacity",
		"dates": "August 2015 to Present",
		"url": "http://www.udacity.com/"
		},
		{
		"title": "Shaping Up with ANGULAR.JS",
		"school": "CodeSchool",
		"dates": "November 2013",
		"url": "http://campus.codeschool.com/courses/shaping-up-with-angular-js/"
		}
	] /* onlineCourses */
}; /* education */

education.display = function() {
	for (var school=0; school < education.schools.length; school++) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);

		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
	} /* for */

	$("#education").append(HTMLonlineClasses);

	for (school=0; school < education.onlineCourses.length; school++) {
		$("#education").append(HTMLschoolStart);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);

		var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
		$(".education-entry:last").append(formattedTitle + formattedonlineSchool);

		var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
		$(".education-entry:last").append(formattedonlineDates);

		var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
		$(".education-entry:last").append(formattedonlineURL);
	} /* for */
}; /* education.display() */


var projects = {
	"projects": [
		{
		"title": "Classico Construction",
		"dates": "2013",
		"description": "Informational website for a local construction company name Classico Construction. They wanted a website to show off their work that they could send prospective clients to. Website uses Bootstrap 3.0 to make it responsive and uses a modal carosel. Also uses BootstrapValidator on the Contact Us page to validate the input fields.",
		"images": ["images/classico-img1.jpg", "images/classico-img2.jpg"],
		"url": "http://mikedsamples.com/miked/classico-bs/index.html"
		},
		{
		"title": "Spa For Beautiful Skin",
		"dates": "2013",
		"description": "Designed and developed this site for a local spa. Hand coded in a Responsive Design. Site will adjust to 3 different viewport widths.",
		"images": ["images/spa-img1.jpg"],
		"url": "http://mikedsamples.com/miked/spa/index.html"
		}
	]
}; /* projects */

projects.display = function() {
	for (var project=0; project < projects.projects.length; project++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		formattedTitle = formattedTitle.replace("#", projects.projects[project].url);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image=0; image < projects.projects[project].images.length; image++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			} /* for */
		} /* if */
	} /* for */
}; /* projects.display */

/* Call the functions to insert the formatted HTML in the page */
bio.display() ;
work.display() ;
projects.display();
education.display();
$("#mapDiv").append(googleMap);



