import './css/flexslider.css';
import './css/grid.css';
import './css/ie.css';
import './css/reset.css';
import './css/style.css';
function Contacts() {
  return (
					<div>
						<title>Gourmet Cooking School | Contacts</title>
						<meta charSet="utf-8" />
						<link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" />
						<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
						<link rel="stylesheet" href="css/grid.css" type="text/css" media="screen" />
						<link rel="icon" href="images/favicon.ico" type="image/x-icon" />
						<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
						<link href="http://fonts.googleapis.com/css?family=PT+Serif+Caption:400,400italic" rel="stylesheet" type="text/css" />
						{/*[if lt IE 9]>
		
		<link rel="stylesheet" href="css/ie.css"> 
		<link href="http://fonts.googleapis.com/css?family=PT+Serif+Caption:400italic" rel="stylesheet" type="text/css">
		<link href="http://fonts.googleapis.com/css?family=PT+Serif+Caption:400" rel="stylesheet" type="text/css">
		<![endif]*/}
						<header>
							<div className="line-top" />
							<div className="main">
								<div className="row-top">
									<h1><a href="index.html"><img alt="" src="images/logo.png" /></a></h1>
									<nav>
										<ul className="sf-menu">
											<li><a href="/home">Home</a></li>
											<li><a href="/courses">Courses</a> </li>
											<li><a href="/recipes">Recipes</a>
												<ul>
													<li><a href="#">dolores et</a></li>
													<li><a href="#">lorem ipsum dolo </a>
													</li><li><a href="#">sanctus est</a></li>
												</ul>
											</li>
											<li><a href="/calendar">Calendar</a> </li>
											<li><a href="/chefs">Chefs</a> </li>
											<li className="active"><a href="contacts.">Contacts</a> </li>
										</ul>
									</nav>
									<div className="clear" />
								</div>
							</div>
						</header>
						<section id="content">
							<div className="border-horiz" />
							<div className="main">
								<h3>Contact Information</h3>
								<div className="box-address">
									<h4>Company Name Inc.</h4>
									<dl className="address">
										<dt>8901 Marmora Road,<br />
											Glasgow, D04 89GR.</dt>
										<dd> <span>Freephone:</span> +1 800 559 6580</dd>
										<dd> <span>Telephone:</span> +1 959 603 6035</dd>
										<dd> <span>FAX:</span> +1 504 889 9898</dd>
										<dd> E-mail: <a className="mail-1" href="#">mail@demolink.org</a> </dd>
									</dl>
								</div>
								<div className="map box-img">
									<iframe src="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Brooklyn,+New+York,+NY,+United+States&aq=0&sll=37.0625,-95.677068&sspn=61.282355,146.513672&ie=UTF8&hq=&hnear=Brooklyn,+Kings,+New+York&ll=40.649974,-73.950005&spn=0.01628,0.025663&z=14&iwloc=A&output=embed"> </iframe>
								</div>
								<div className="clear" />
							</div>
							<div className="box-contact">
								<h3>Contact Form</h3>
								<form id="contact-form" action="#">
									<div className="success"> Contact form submitted! <strong>We will be in touch soon.</strong> </div>
									<fieldset>
										<div className="coll-1">
											<div>
												<div className="form-txt">Your Name:</div>
												<label className="name">
													<input type="text" />
													<span className="error">*This is not a valid name.</span> <span className="empty">*This field is required.</span> </label>
												<div className="clear" />
											</div>
											<div>
												<div className="form-txt">Telephone:</div>
												<label className="phone">
													<input type="tel" />
													<span className="error">*This is not a valid phone number.</span> <span className="empty">*This field is required.</span> </label>
												<div className="clear" />
											</div>
											<div>
												<div className="form-txt">Email:</div>
												<label className="email">
													<input type="email" />
													<span className="error">*This is not a valid email address.</span> <span className="empty">*This field is required.</span> </label>
												<div className="clear" />
											</div>
										</div>
										<div className="coll-2">
											<div>
												<div className="form-txt">Message:</div>
												<label className="message">
													<textarea defaultValue={""} />
													<span className="error">*The message is too short.</span> <span className="empty">*This field is required.</span> </label>
												<div className="clear" />
											</div>
										</div>
										<div className="clear" />
										<div className="btns"> <a className="btn" data-type="reset">Clear</a> <a className="btn" data-type="submit">send</a> </div>
									</fieldset>
								</form>
							</div>
						</section>
						<footer>
							<div className="main">
								<ul className="soc-list">
									<li><a href="#"><img alt="" src="images/icon-1.png" /></a></li>
									<li><a href="#"><img alt="" src="images/icon-2.png" /></a></li>
									<li><a href="#"><img alt="" src="images/icon-3.png" /></a></li>
									<li><a href="#"><img alt="" src="images/icon-4.png" /></a></li>
								</ul>
								<div className="policy">Design by: <a href="http://www.templatemonster.com">TemplateMonster.com</a> </div>
								<div className="clear" />
							</div>
						</footer>
					</div>
				);
			}
		export default Contacts;