import './css/flexslider.css';
import './css/grid.css';
import './css/ie.css';
import './css/reset.css';
import './css/style.css';

function Calendar() {
  return (
      <div>
        <title>Gourmet Cooking School | Calendar</title>
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
                  <li><a href="/index">Home</a></li>
                  <li><a href="/courses">Courses</a> </li>
                  <li><a href="/recipes">Recipes</a>
                    <ul>
                      <li><a href="#">dolores et</a></li>
                      <li><a href="#">lorem ipsum dolo </a>
                      </li><li><a href="#">sanctus est</a></li>
                    </ul>
                  </li>
                  <li className="active"><a href="/calendar">Calendar</a> </li>
                  <li><a href="/chefs">Chefs</a></li>
                  <li><a href="/contacts">Contacts</a></li>
                </ul>
              </nav>
              <div className="clear" />
            </div>
          </div>
        </header>
        <section id="content">
          <div className="border-horiz" />
          <div className="main">
            <h3>Useful Information</h3>
            <figure className="img-indent box-img"><img src="images/page4-img1.jpg" alt="" /></figure>
            <div className="overflow padd-2">
              <p>sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet, consetetur sadipscing elitr, sed diam nonumy eirmod temporю</p>
              <a href="#" className="btn">Read more</a> </div>
            <div className="clear" />
          </div>
          <div className="border-horiz extra" />
          <div className="container_12">
            <article className="grid_4">
              <h3>Hot News</h3>
              <ul className="list-popular news">
                <li> <a href="#">At vero eos accusam</a>
                  <p>et justo duolores et ea rebum Stet clita kasd...</p>
                </li>
                <li> <a href="#">sanctus Lorem</a>
                  <p>ipsum dolor sit amet Lorem ipsum dolor...</p>
                </li>
                <li> <a href="#">sadipscing sediam </a>
                  <p>nonumy eirmod tempor inviunt labore et dolore magna...</p>
                </li>
              </ul>
            </article>
            <article className="grid_8">
              <h3>Calendar of events</h3>
              <a href="#" className="link-1">10 October, 2010 - dolor liquam congue fermentum nisl</a>
              <p>erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et rebum Stet clita kasd gubergren.</p>
              <a href="#" className="link-1">07 October, 2010 - estibulum sed ante</a>
              <p>dolor sit amet. Lorem ipsum dolor sit amet, consetetur saing accusam aliquyam diam diam dolore dolores duo eirmod eos erat.</p>
              <a href="#" className="link-1">04 October, 2010 - usce feugiat malesuada odio</a>
              <p>et nonumy sed tempor et et invidunt justo labore Stet clita gubergren kasd magna no rebum. sanctus sea sed takimata ut vero voluptua.</p>
            </article>
            <div className="clear" />
          </div>
          <div className="border-horiz extra1" />
          <div className="container_12">
            <div className="main padd-1">
              <h3>Education Calendar</h3>
            </div>
            <article className="grid_6">
              <figure className="img-indent box-img"><img src="images/page4-img2.jpg" alt="" /></figure>
              <div className="overflow padd-1"> <a href="#" className="link-1">At vero eos et accusam et justo duo dolores.</a>
                <p>Stet clitakasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit consetetur.</p>
              </div>
              <div className="clear" />
            </article>
            <article className="grid_6">
              <figure className="img-indent box-img"><img src="images/page4-img3.jpg" alt="" /></figure>
              <div className="overflow padd-1"> <a href="#" className="link-1">At vero eos et accusam et justo duo.</a>
                <p>est Lorem ipsum dolor sit amet. Lorem ipsum dolor samet consetetur sadipscing elitr, sed diam. nonumy eirmod tempor.</p>
              </div>
              <div className="clear" />
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

export default Calendar;