html{
	scroll-behavior: smooth;
}
*{
	margin:0;
	padding: 0;
	font-family: 'Lato',sans-serif;
}
.banner{
	height: 100vh;
	width: 100%;
	background:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('background\ image\ bbbb788.jpeg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	color: #fff;
}
.banner .navigation-bar{
	position: fixed;
	padding:5px 0;
	top:2%;
	z-index: 999;
}
.banner .navigation-bar .logo{
	position: relative;
	margin-left: 10%;
	font-size: 2.2em;
	font-weight: 800;
	cursor: pointer;
}
.banner .navigation-bar .logo a{
	text-decoration: none;
	color: #fff;
	letter-spacing: 0.5px;
}
.banner .navigation-bar .logo a span{
	color:#2ecc71 ;
}
.banner .navigation-bar .menu-text{
	margin-right:10%;
	height: 100%;
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
}
.banner .navigation-bar .menu-text .menu-heading{
	font-size: 1.2em;
	font-weight: 500;
	margin-top: 18px;
	margin-right: 15px;
	color:#2ecc71 ; 
}
.banner .navigation-bar .menu-text:hover .menu-heading{
	color: #fff;
}
.banner .navigation-bar .menu-text i{
	font-size: 1.5em;
}
.banner .info-banner{
	position: absolute;
	top:50%;
	transform: translateY(-50%);
}
.banner .info-banner .info-heading-text h2{
	font-size: 1.5em;
	font-weight: 600;
	color: rgb(182, 201, 10);
	font-family: sans-serif;
}
.banner .info-banner .info-heading-text h1{
	font-size: 2.2em;
	font-weight: 700;
	color: #fff;
	font-family: sans-serif;
}
.banner .info-banner .buttons{
	margin-top:2%;
}
.banner .info-banner .buttons a{
	color: #fff;
	font-size: 1.2em;
	border:2px solid #fff;
	border-radius: 0;
	padding:8px 15px;
	margin:0 0.5%;
	font-weight: 550;
	transition: 0.2s ease-in-out;
}
.banner .info-banner .buttons a:nth-child(2),
.banner .info-banner .buttons a:nth-child(1):hover{
	background:#fff;
	color: #000;
}
.banner .info-banner .social-icons{
	display: flex;
	flex-direction: column;
	font-size: 3.0em;
	color: red;
}
.banner .info-banner .social-icons a{
	text-decoration:none;
	color: #fff;
	transition: 0.2s linear;
}
.banner .info-banner .social-icons a:hover{
	color:#2ecc71;
}
.banner .angle{
	position: absolute;
	bottom:0;
	border-right: 2px solid #2ecc71;
	font-size: 1em;
	display: flex;
	justify-content: center;
	height: 80px;
	text-decoration:none;
	cursor: pointer;
	color: #fff;
}
.banner .angle h2{
	font-size: 1em;
	margin-top: -15px;
	margin-right: -10px;
}
.banner .angle i{
	font-size: 1.5em;
	margin-left: 5px;
	color: #2ecc71;
	margin-top: -15px;
}
.banner .nav2{
	position: fixed;
	top:0;
	background:#000;
	color:#fff;
	height: 100%;
	width: 300px;
	z-index: 99999999;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: 0.3s linear;
	right: -100%;
}
.banner .nav2 i{
	cursor: pointer;
	color: #fff;
	font-size: 1.5em;
	position: absolute;
	top:15%;
	right: 15%;
}
.banner .nav2 i:hover{
	color: #666;
}
.banner .nav2 ul li{
	list-style-type: none;
	display: block;
	text-align: center;
	font-size: 1.5em;
	font-weight: 500;
	text-transform: uppercase;
	color: #fff;
}
.banner .nav2 ul li a{
	text-decoration: none;
	color: #fff;
}
.banner .nav2 ul li a:hover{
	color: #2ecc71;
}

/*about section */

#about .main-about{
	position: relative;
	height: 100%;
	width: 100%;
	margin-top:5%;
}
#about .main-about .about-us-info{
	position: relative;
	height: 100%;
	width: 100%;
}
#about .main-about .about-us-info .about-us-info-heading{
	border-left:5px solid #2ecc71;
	padding:10px 15px;
	font-size: 3em;
	font-weight: 700;
	color:#111;
	font-family: sans-serif;
}
#about .main-about .about-us-info .about-us-info-subheading{
	font-size: 1.5em;
	font-weight: 500;
	color:#666;
	font-family: sans-serif;
	width: 100%;
}
#about .main-about .about-us-info .about-us-info-subheading::first-letter{
	font-size:2.5em;
	font-weight: 700;
}
#about .about-us-intro{
	margin-top:5%;
	position: relative;
}
#about .about-us-intro .about-us-intro-heading{
	font-family: sans-serif;
	font-weight: 500;
	font-size: 1.5em;
	color: #666;
}
#about .about-us-intro:hover .about-us-intro-heading{
	color: #000;
}
#about .about-us-intro .image-intro-thumbnail{
	position: relative;
	height: 250px;
	width: 300px;
	margin-top: 10%;
	margin-right: 10%;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
}
#about .about-us-intro .image-intro-thumbnail img{
	position: absolute;
	top:0;
	left: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
	z-index: -1;
}
#about .about-us-intro .image-intro-thumbnail::before{
	position: absolute;
	top:-20px;
	left: -20px;
	content: '';
	height: 100%;
	width: 100%;
	background: #017bf5;
	z-index: -3;
	transition: 0.2s ease-in-out;
}
#about .about-us-intro .image-intro-thumbnail:hover::before{
	top:-10px;
	left: -10px;
}
#about .about-us-intro .image-intro-thumbnail::after{
	position: absolute;
	top:0;
	left: 0;
	content: '';
	height: 100%;
	width: 100%;
	background: rgba(0, 0, 0, 0.4);
	z-index: 0;
}
#about .about-us-intro .image-intro-thumbnail i{
	position: relative;
	color: #fff;
	font-size: 1.2em;
	z-index: 1;
}
#about .about-us-intro .image-intro-thumbnail .circle{
	position: absolute;
	height: 50px;
	width: 50px;
	border:2px dashed #fff;
	z-index: 2;
	border-radius: 50%;
	animation:animatecircle 2s linear infinite;
}
@keyframes animatecircle{
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
}

#about .light-box-intro{
	position: fixed;
	top:0;
	left: 0;
	height: 100%;
	width: 100%;
	background:rgba(0, 0, 0, 0.8);
	z-index: 999999999999999;
	display: none;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
#about .light-box-intro i{
	position: absolute;
	top:15%;
	right: 15%;
	font-size: 48px;
	font-weight: 600;
	color: #fff;
	cursor: pointer;
}
#about .light-box-intro i:hover{
	color: rgb(102, 102, 102);
}

/*portfollio section */

#portfolio{
	position: relative;
	margin-top: 5%;
	padding:50px 0;
}
#portfolio .portfolio-section{
	position: relative;
}
#portfolio .portfolio-section h1{
	font-size: 2.2em;
	font-weight: 650;
	margin-bottom: 2%;
}

#portfolio .portfolio-section p{
	font-size: 1.2em;
	font-weight: 500;
	margin-bottom: 2%;
	color: #666;
}
#portfolio .portfolio-videos{
	position: relative;
	height: 100%;
	width: 95%;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
}
#portfolio .portfolio-videos iframe{
	margin:2%;
}
#portfolio .load-btn{
	color: #017bf5;
	background:#fff;
	border:0.5px solid #ddd;
	font-family: sans-serif;
	font-size:0.89em;
	letter-spacing: 2px;
	font-weight: 550;
	border-radius: 0;
	padding:10px 50px;
	margin-top: 5%;
	transition:0.2s ease-in-out;
}
#portfolio .load-btn:hover{
	background:#017bf5;
	border:0.5px solid #017bf5;
	color: #fff;
}
/*contact us section*/
#contact{
	position: relative;
	height: 100%;
	width: 100%;
	background:linear-gradient(rgba(0, 0, 0, 0.45),rgba(0, 0, 0, 0.45)),url('lower\ pic\ background.jpeg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-attachment: fixed;
	color: #fff;
}
#contact .contact-heading{
	margin-top:5%;
}
#contact .contact-form{
	margin-top:2%;
	padding:10px 0;
}
#contact .contact-form input[type="text"],
#contact .contact-form input[type="email"]{
	-webkit-appearance:none !important;
	background:transparent;
	border:1px solid rgba(255, 255, 255, 0.8);
	padding:2px 5px;
	height: 40px;
	width: 250px;
	color: #fff;
	font-size: 1em;
}
#contact .contact-form input[type="text"]::placeholder,
#contact .contact-form input[type="email"]::placeholder{
	color: #ddd;
	font-weight: 500;
	font-family: sans-serif;
	font-size: 0.89em;
}
#contact .contact-form .subject input{
	width: 505px;
}
#contact .contact-form textarea{
	-webkit-appearance:none !important;
	background:transparent;
	border:1px solid rgba(255, 255, 255, 0.8);
	padding:2px 5px;
	height: 250px;
	width: 505px;
	color: #fff;
	font-size: 1em;
}
#contact .contact-form textarea::placeholder{
	color: #ddd;
}
#contact .contact-form input[type="submit"]{
	padding:10px 100px;
	font-size: 1.2em;
	font-weight: 550;
	letter-spacing: 2px;
}
/*footer*/

#footer{
	padding:10px 0;
	position: static;
	bottom: 0;
	color: #fff;
	font-family: sans-serif;
}
#footer .logo-footer{
	position: relative;
	text-decoration: none;
	color: #fff;
	font-family: 'Lato',sans-serif;
	margin-left:45%;
	height: auto;
	width: 100%;
	font-size: 3.5em;
	font-weight: 600;
}
#footer .btn-back{
	position: relative;
	color: #fff;
	border:1px solid #fff;
	margin-left:50%;
	transform: translateX(-50%);
}
#footer .btn-back:hover{
	background:#fff;
	color: #017bf5;
}
#footer .footer-credits{
	margin-top: 0.5%;
	font-size: 0.99em;
	font-weight: 550;
}
#footer .footer-credits a{
	color: #fff;
	font-weight: 500;
}
