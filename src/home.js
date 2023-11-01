import './css/flexslider.css';
import './css/grid.css';
import './css/ie.css';
import './css/reset.css';
import './css/style.css';

function Home() {
  return (
					<div>
						<title>Gourmet Cooking School</title>
						<meta charSet="utf-8" />
						<link rel="stylesheet" href="css/reset.css" type="text/css" media="screen" />
						<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
						<link rel="stylesheet" href="css/grid.css" type="text/css" media="screen" />
						<link rel="icon" href="images/favicon.ico" type="image/x-icon" />
						<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
						<link href="http://fonts.googleapis.com/css?family=PT+Serif+Caption:400,400italic" rel="stylesheet" type="text/css" />
						<link rel="stylesheet" href="css/flexslider.css" type="text/css" media="screen" />
						{/*[if lt IE 9]>
		
		<link rel="stylesheet" href="css/ie.css"> 
		<link href="http://fonts.googleapis.com/css?family=PT+Serif+Caption:400italic" rel="stylesheet" type="text/css">
		<link href="http://fonts.googleapis.com/css?family=PT+Serif+Caption:400" rel="stylesheet" type="text/css">
		<![endif]*/}
						<header>
							<div className="line-top" />
							<div className="main">
								<div className="row-top">
									<h1><a href="index.html"><img alt="not found" src="images/logo.png" /></a></h1>
									<nav>
										<ul className="sf-menu">
											<li className="active"><a href="/home">Home</a></li>
											<li><a href="/courses">Courses </a> </li>
											<li><a href="/recipes">Recipes</a>
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
							<div className="box-slider">
								<div className="flexslider">
									<ul className="slides">
										<li> <img alt="" src="images/slide-1.jpg" /></li>
										<li> <img alt="" src="images/slide-2.jpg" /></li>
									</ul>
								</div>
							</div>
							<div className="box-slogan">
								<h3>Welcome to Gourmet cooking school!</h3>
								<p> At vero eos et <a href="#" className="link-1">accusam et</a> justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet lorem ipsum dolor sit amet. </p>
							</div>
						</header>
						<section id="content">
							<div className="border-horiz" />
							<div className="container_12 row-1">
								<article className="grid_4 thumbnail-1">
									<h3><span>Vegan</span> cookings </h3>
									<figure className="box-img"><img src="images/page1-img1.jpg" alt="" /></figure>
									<p><a href="#" className="link-1">Click here</a> for more info about this free template created by TemplateMonster.com team.</p>
									<a href="#" className="btn">Read more</a> </article>
								<article className="grid_4 thumbnail-1">
									<h3><span>grill</span> cookings </h3>
									<figure className="box-img"><img src="images/page1-img2.jpg" alt="" /></figure>
									<p>This web template is optimized for 1280X1024 screen resolution. It is also XHTML &amp; CSS valid.</p>
									<a href="#" className="btn">Read more</a> </article>
								<article className="grid_4 thumbnail-1">
									<h3><span>dessert</span> cookings </h3>
									<figure className="box-img"><img src="images/page1-img3.jpg" alt="" /></figure>
									<p>The PSD source files of this template are available for free for the registered members.</p>
									<a href="#" className="btn">Read more</a> </article>
								<div className="clear" />
							</div>
							<div className="border-horiz" />
							<div className="container_12">
								<article className="grid_4">
									<h3>popular</h3>
									<ul className="list-popular">
										<li> <a href="#">Lighter cooking</a>
											<p>At vero eos et accusam etusto dolores et ea rebum.</p>
										</li>
										<li> <a href="#">Pudding</a>
											<p>Duis autem vel eum iriure dolor in hendrerit.</p>
										</li>
										<li> <a href="#">Black bean salsa</a>
											<p>Molestie consequat, vel illum dolore eu feugiat.</p>
										</li>
										<li> <a href="#">Asparagus</a>
											<p>Vulputate velit esse molestie consequat.</p>
										</li>
									</ul>
								</article>
								<article className="grid_8">
									<h3>Professional programs</h3>
									<blockquote className="quote-1"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquym erat, sed diam voluptua At vero eos. </blockquote>
									<div className="name-author">- James Willis</div>
									<ul className="list-dropcap">
										<li>
											<div className="wrapper">
												<div className="dropcap">A</div>
												<a href="#">Lorpsum dolor</a> </div>
											<figure className="box-img"><img src="images/page1-img4.jpg" alt="" /></figure>
										</li>
										<li>
											<div className="wrapper">
												<div className="dropcap">B</div>
												<a href="#">consetet
													sadiping </a> </div>
											<figure className="box-img"><img src="images/page1-img5.jpg" alt="" /></figure>
										</li>
										<li>
											<div className="wrapper">
												<div className="dropcap">C</div>
												<a href="#">diam nonumy </a> </div>
											<figure className="box-img"><img src="images/page1-img6.jpg" alt="" /></figure>
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

export default Home;
