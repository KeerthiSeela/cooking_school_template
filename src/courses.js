import './css/flexslider.css';
import './css/grid.css';
import './css/ie.css';
import './css/reset.css';
import './css/style.css';
function Courses() {
  return (

	<div>
		<title>Gourmet Cooking School | Courses</title>
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
							<li className="active"><a href="/courses">Courses</a> </li>
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
		</header>
		<section id="content">
			<div className="border-horiz" />
			<div className="container_12">
				<article className="side-bar">
					<h3><span>Main</span> Courses</h3>
					<p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consetetur sadipscing elitr, sed sadipscing nonumy eirmod tempor.</p>
					<ul className="list-1">
						<li><a href="#">invidunt ut labore</a></li>
						<li><a href="#">et dolore magna</a></li>
						<li><a href="#">aliquyam erat</a></li>
						<li><a href="#">sed diam voluptua</a></li>
						<li><a href="#">At vero eos et accusam</a></li>
						<li><a href="#">et justo duo</a></li>
					</ul>
					<p>dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore.</p>
					<ul className="list-1">
						<li><a href="#">dolores duo eirmod</a></li>
						<li><a href="#">eos erat et nonumy sed</a></li>
						<li><a href="#">tempor et et</a></li>
						<li><a href="#">invidunt justo</a></li>
						<li><a href="#">labore Stet clita</a></li>
						<li><a href="#">ea et gubergren kasd</a></li>
						<li><a href="#">magna no rebum</a></li>
					</ul>
				</article>
				<article className="grid_8">
					<h3>Short Courses</h3>
					<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tepor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duof dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
					<a href="#" className="btn">Read more</a>
					<div className="padd-1">
						<h3>Our Teachers</h3>
					</div>
					<ul className="list-teachers">
						<li>
							<figure className="box-img"><img src="images/page2-img1.jpg" alt="" /></figure>
							<div className="overflow">
								<h4>Danis bowing</h4>
								<p>Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.</p>
								<a href="#" className="btn">Read more</a> </div>
							<div className="clear" />
						</li>
						<li>
							<figure className="box-img"><img src="images/page2-img2.jpg" alt="" /></figure>
							<div className="overflow">
								<h4>Jane smart</h4>
								<p>dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
								<a href="#" className="btn">Read more</a> </div>
							<div className="clear" />
						</li>
						<li>
							<figure className="box-img"><img src="images/page2-img3.jpg" alt="" /></figure>
							<div className="overflow">
								<h4>Sam Dowson</h4>
								<p>sed diam nonumy eirmod tempor invidunt ut labore et dolore. magna aliquyam erat, sed diam voluptua.</p>
								<a href="#" className="btn">Read more</a> </div>
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
export default Courses;