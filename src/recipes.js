import './css/flexslider.css';
import './css/grid.css';
import './css/ie.css';
import './css/reset.css';
import './css/style.css';

function Recipes() {
  return (
					<div>
						<title>Gourmet Cooking School | Recipes</title>
						<meta charSet="utf-8" />
						<link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" />
						<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
						<link rel="stylesheet" href="css/grid.css" type="text/css" media="screen" />
						<link rel="icon" href="images/favicon.ico" type="image/x-icon" />
						<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
						<link href="http://fonts.googleapis.com/css?family=PT+Serif+Caption:400,400italic" rel="stylesheet" type="text/css" />
						{/*[if lt IE 9]>
		
		<link rel="stylesheet" href="css/ie.css"> 
		<link href="http://fonts.googleapis.com/css?family=PT+Serif+Caption:400" rel="stylesheet" type="text/css">
		<link href="http://fonts.googleapis.com/css?family=PT+Serif+Caption:400italic" rel="stylesheet" type="text/css">
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
											<li className="active"><a href="/recipes">Recipes</a>
												<ul>
													<li><a href="#">dolores et</a></li>
													<li><a href="#">lorem ipsum dolo </a>
													</li><li><a href="#">sanctus est</a></li>
												</ul>
											</li>
											<li><a href="/calendar">Calendar</a> </li>
											<li><a href="/chefs">Chefs</a> </li>
											<li><a href="/contacts">Contacts</a> </li>
										</ul>
									</nav>
									<div className="clear" />
								</div>
							</div>
						</header>
						<section id="content">
							<div className="border-horiz" />
							<div className="container_12">
								<article className="side-bar extra">
									<h3><strong>3</strong> Steps <em>To become<br />
											a perfect cook</em> </h3>
									<ul className="list-dropcap1">
										<li>
											<div className="wrapper">
												<div className="dropcap">1</div>
												<h4>Enter our <br />
													school</h4>
											</div>
											<p>At vero eos et accusam justo duo dolores et ea Stet clita kasd gubergren.</p>
											<a href="#" className="btn">Read more</a> </li>
										<li>
											<div className="wrapper">
												<div className="dropcap">2</div>
												<h4>Education
													Courses</h4>
											</div>
											<p>takimata snctus Lorem ipsum dolor sit am Lorem ipsum dolor sit consetetur.</p>
											<a href="#" className="btn">Read more</a> </li>
										<li>
											<div className="wrapper">
												<div className="dropcap">3</div>
												<h4>Practical
													Training</h4>
											</div>
											<p>sadipscing elitsed diaonumy eirmod tempor duo dolores et ea rebum. Stet clita.</p>
											<a href="#" className="btn">Read more</a> </li>
									</ul>
								</article>
								<article className="grid_8">
									<h3>New Recipes</h3>
									<ul className="list-recipes">
										<li>
											<figure className="box-img"><img src="images/page3-img1.jpg" alt="" /></figure>
											<div className="overflow">
												<h4>consetetur sadipscing</h4>
												<p>invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. Stet clita kasd gubergro sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor consetetur sadipscing elitr, sed diam.</p>
											</div>
											<div className="clear" />
										</li>
										<li>
											<figure className="box-img"><img src="images/page3-img2.jpg" alt="" /></figure>
											<div className="overflow">
												<h4>consetetur elitr</h4>
												<p>aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren. no sea takimata sanctus est Lor ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur. sadipscing</p>
											</div>
											<div className="clear" />
										</li>
										<li>
											<figure className="box-img"><img src="images/page3-img3.jpg" alt="" /></figure>
											<div className="overflow">
												<h4>consetetur sadipscing</h4>
												<p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo. dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
											</div>
											<div className="clear" />
										</li>
									</ul>
								</article>
								<div className="clear" />
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
			export default Recipes;