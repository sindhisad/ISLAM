<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Scrollspy with animated scroll and focus</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Open Sans -->
<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800' rel='stylesheet' type='text/css'>

<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">


<script src="https://cdn.linearicons.com/free/1.0.0/svgembedder.min.js"></script><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css'>
<link rel='stylesheet' href='https://codepen.io/CodeBoomer/pen/PzgWYp.css'><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<body data-spy="scroll" data-target="#scroll-spy">
	
	<!-- Navigation - Fixed Top -->
	<nav class="navbar navbar-fixed-top">
		<div class="container-fluid">
			<!-- Brand and toggle get grouped for better mobile display -->
			<div class="navbar-header">
				<a class="navbar-home" href="#home" role="button">
					<svg class="lnr lnr-home"><use xlink:href="#lnr-home"></use></svg>
				</a>	
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#scroll-spy" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<i class="material-icons">&#xE5D2;</i>
				</button>
<!-- 				<a class="navbar-brand" href="#home">Boom Scroll
					<i class="material-icons">mouse</i>
				</a> -->
			</div>

			<!-- Collect the nav links, forms for toggling -->
			<div class="collapse navbar-collapse" id="scroll-spy">

				<!-- navbar-nav -->
				<ul class="nav navbar-nav ">
					<li><a href="#about">About</a></li>
					<li><a href="#demo">Demo</a></li>
					<li><a href="#features">Features</a></li>
					<li><a href="#howto">How to</a></li>					
				</ul><!-- /.navbar-nav -->
			</div><!-- /.navbar-collapse -->		
		</div><!-- /.container-fluid -->
	</nav><!-- /.fixed navigation -->
	
	<section id="home">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="mouse"></div>
					<h1>ScrollSpy</h1>
					<h4>by Boomer</h4>
				</div><!-- /.col -->
			</div><!-- /.row -->
			<div class="row">
				<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
					<p>Best implementation of Bootstraps Scroll Spy for animated scrolling and page location</p>
				</div><!-- /.col -->
			</div><!-- /.row -->
			<div class="row">
				<div class="col-xs-12">
					<a class="tutorials-link" href="" role="button">Watch Videos</a>
				</div>
			</div>
		</div><!-- /.container -->
	</section><!-- /#home -->
	
	<section id="about">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="section-header">
						About
					</div>
				</div><!-- /.col -->
			</div><!-- /.row -->	
			<div class="row">
				<div class="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
					<p>ScrollSpy.js highlights page position by applying an 'active' class to the Navigation link within a Bootstrap nav component. It does this by monitoring the #target element of the nav link within the window, waiting for it to reach a given 'Y' position, usually zero.</p>
						
						<p><highlight>This example</highlight> demonstrates some rich, additional features including <strong>animated scrolling</strong>, <strong>focus events</strong> as well as how to offset with a fixed navigation bar.</p>
					
					<p>It also shows how to ensure that the 'last' #target element is able to scroll to the top for a better user experience (UX)</p>					
				</div><!-- /.col -->
			</div><!-- /.row -->
		</div><!-- /.container -->
	</section><!-- /#about -->	
	
	<section id="demo">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="section-header">
						Demo
					</div>
				</div><!-- /.col -->
			</div><!-- /.row -->	
			<div class="row">
				<div class="video-roll--container col-xs-12">
					<ul class="video-roll">
						<li><a href="https://youtu.be/kLiMpaMKal8" target="_blank"></a></li>
						<li><a href="https://youtu.be/aVFYHGtf6So" target="_blank"></a></li>
						<li><a href="https://youtu.be/OKxASY7ABfs" target="_blank"></a></li>
					</ul>				
				</div><!-- /.col -->
			</div><!-- /.row -->
			<div class="row">
				<div class="col-xs-12 text-center">		
					<a class="tutorials-link" href="https://www.youtube.com/channel/UCydykDsTWRIVnxKHW3SHPQA" role="button">Watch Videos</a>	
					<h4>Check out my YouTube tutorials</h4>
				</div><!-- /.col -->
			</div><!-- /.row -->
		</div><!-- /.container -->
	</section>	

	<section id="features">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="section-header">
						Features
					</div>
				</div><!-- /.col -->
			</div><!-- /.row -->
			
			<div class="row">
				<div class="feature-container col-xs-12">
					<div class="row">
						<div class="feature col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-0 text-center">
							<svg class="lnr lnr-magic-wand"><use xlink:href="#lnr-magic-wand"></use></svg>
							<h4>Animated Scroll</h4>
							<p>Smooth, animated scroll between navigation links</p>
						</div><!-- /.feature -->

						<div class="feature col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 text-center">
							<svg class="lnr lnr-map-marker"><use xlink:href="#lnr-map-marker"></use></svg>
							<h4>Page Location</h4>
							<p>Track page locations when scrolling</p>
						</div><!-- /.feature -->

						<div class="feature col-xs-10 col-xs-offset-1 col-sm-4 col-sm-offset-0 text-center">
							<svg class="lnr lnr-bullhorn"><use xlink:href="#lnr-bullhorn"></use></svg>
							<h4>Focus Events</h4>
							<p>Draw user attention to navigated sections</p>
						</div><!-- /.feature -->
					</div><!-- /.row -->
				</div><!-- /.feature-container -->

			</div><!-- /.row -->
		</div><!-- /.container -->
		
		<div class="container-fluid">
			<div class="banner row">
				<div class="banner-child bc-left col-sm-6">
					<div class="section-sub-header">
						Animated Scroll
					</div>
					
					<div class="animated-scroll">
						<div class="scroll-header">
							<div class="scroll-nav sn-1"></div>
							<div class="scroll-nav sn-2"></div>
							<div class="scroll-nav sn-3"></div>
							<svg class="cursor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve"><path d="M7,2l12,11.2l-5.8,0.5l3.3,7.3l-2.2,1l-3.2-7.4L7,18.5V2"/></svg>
						</div><!-- /.scroll-header -->
						
						<div class="scroll-body">
							<div class="scroll-child sc-1"></div>
							<div class="scroll-child sc-2"></div>		
							<div class="scroll-child sc-3"></div>
							<div class="scroll-child sc-back-to-top"></div>
						</div><!-- /.scroll-body -->
					</div><!-- /.animated scroll -->
				</div><!-- /.banner-child -->
				
				<div class="banner-child bc-right col-sm-6">
					<div class="section-sub-header">
						Focus Events | UX
					</div>			
					
					<div class="focus-events">
						<div class="scroll-header">
							<div class="scroll-nav sn-1"></div>
							<div class="scroll-nav sn-2"></div>
							<svg class="cursor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 24 24" id="Layer_1" version="1.0" viewBox="0 0 24 24" xml:space="preserve"><path d="M7,2l12,11.2l-5.8,0.5l3.3,7.3l-2.2,1l-3.2-7.4L7,18.5V2"/></svg>
						</div><!-- /.scroll-header -->
						
						<div class="scroll-body">
							<div class="scroll-child sc-1">
								<div class="header"></div>
								<div class="sub-header"></div>
								<div class="body"></div>
								<div class="body"></div>
								<div class="body"></div>
							</div>
							<div class="scroll-child sc-2">
								<div class="header"></div>
								<div class="sub-header"></div>
								<div class="body"></div>
								<div class="body"></div>
								<div class="body"></div>							
							</div>
						</div><!-- /.scroll-body -->
					</div><!-- /.animated scroll -->				
				</div><!-- /.banner-child -->
			</div><!-- /.row -->
		</div><!-- /.container-fluid -->
	</section><!-- /#features -->
	
	<section id="howto">
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<div class="section-header">
						How To
					</div>
				</div><!-- /.col -->
			</div><!-- /.row -->
			
			<div class="row">
				<div class="col-xs-12">			
					<div class="section-sub-header">
						Offest a Fixed Navbar
					</div>
				</div><!-- /.col -->
			</div><!-- /.row -->
			
<div class="row">
	<div class="col-xs-12">
<figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;body</span> <span class="na">data-spy=</span><span class="s">"scroll"</span> <span class="na">data-target=</span><span class="s">"#navbar-example"</span> <span class="na">data-offset=</span><span class="s">"70"</span><span class="nt">&gt;</span>
  ...
<span class="nt">&lt;/body&gt;</span></code></pre>
</figure>	
	</div><!-- /.col -->
</div><!-- /.row -->		

<div class="row">
	<div class="col-xs-12">
<figure class="highlight"><pre><code class="language-js" data-lang="js"><span class="nx">$</span><span class="p">(</span><span class="s1">'body'</span><span class="p">).</span><span class="nx">scrollspy</span><span class="p">({</span>
  <span class="na">offset</span><span class="p">:</span> <span class="s1">offsetHeight</span> <span class="c1">/*A numeric representing pixel count*/</span>
<span class="p">})</span></code></pre>
</figure>	
	</div><!-- /.col -->
</div><!-- /.row -->				

			<div class="row">
				<div class="col-xs-12">			
					<div class="section-sub-header">
						Ensure last #target scrolls to top
					</div>
					<p>A common problem I see with scrollspy implementations is when the last navigation target doesn't navigation to the top of the screen. This causes issues for scrollspy as well as confusing the user if the target they clicked is half way down the page.</p>
					<p>The problem is simple, the document isn't long enough to allow it to scroll to the top.</p>
					
					<p>A simple solution is to dynamically add padding-bottom to the body via JQuery, which increases the height to the pixel perfect minimum. We need to do this both at render/page load and if the window is resized. The below code is a simplified and calculates the height of all sibling elements (after the target) to calculate</p>
					
					
				</div><!-- /.col -->
			</div><!-- /.row -->

<div class="row">
	<div class="col-xs-12">
<figure class="highlight"><pre><code class="language-js" data-lang="js">
<span class="kd">var</span> <span class="vg">height</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'#targetId'</span><span class="p">).</span><span class="nx">innerHeight</span><span class="p">(</span><span class="p">)</span>
<span class="kd">var</span> <span class="vg">windowHeight</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">window</span><span class="p">).</span><span class="nx">height</span><span class="p">(</span><span class="p">)</span>
<span class="kd">var</span> <span class="vg">navHeight</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'nav.navbar'</span><span class="p">).</span><span class="nx">innerHeight</span><span class="p">(</span><span class="p">)</span>
<span class="kd">var</span> <span class="vg">siblingHeight</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">'#targetId'</span><span class="p">).</span><span class="nx">nextAll</span><span class="p">(</span><span class="p">).</span><span class="nx">innherHeight</span><span class="p">(</span><span class="p">)</span>

<span class="nx">if</span><span class="p">(</span><span class="nx">height </span><span class="nx">&lt;</span><span class="nx"> windowHeight</span><span class="p">)</span><span class="p">(</span><span class="p">{</span>
  <span class="nx">$</span><span class="p">(</span><span class="s1">'body'</span><span class="p">).</span><span class="nx">css</span><span class="p">(</span><span class="na">"padding-bottom"</span><span class="p">,</span> <span class="nx">windowHeight</span><span class="p">-</span><span class="nx">navHeight</span><span class="p">-</span><span class="nx">height</span><span class="p">-</span><span class="nx">siblingHeight</span> <span class="p">+</span> <span class="p">"</span><span class="s1">px</span><span class="p">"</span><span class="p">)</span>
<span class="p">}</span>	
</code></pre>
</figure>	
	</div><!-- /.col -->
</div><!-- /.row -->		
		</div><!-- /.container -->
	</section>
	<footer>
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<h4>
						This is a footer
					</h4>
				</div>
			</div>
		</div>	
	</footer>
	<a href="#home" role="button" class="scrollTop">
		<svg class="lnr lnr-chevron-up"><use xlink:href="#lnr-chevron-up"></use></svg>
	</a>
</body>
<!-- partial -->
  <script src='https://code.jquery.com/jquery-2.2.4.min.js'></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js'></script><script  src="./script.js"></script>


<style>
	
/* ==========================================================================
   #FONT
   ========================================================================== */
.font-robo {
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
}

/* ==========================================================================
   #GRID
   ========================================================================== */
.row {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.row-space {
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.col-2 {
  width: -webkit-calc((100% - 60px) / 2);
  width: -moz-calc((100% - 60px) / 2);
  width: calc((100% - 60px) / 2);
}

@media (max-width: 767px) {
  .col-2 {
    width: 100%;
  }
}

/* ==========================================================================
   #BOX-SIZING
   ========================================================================== */
/**
 * More sensible default box-sizing:
 * css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice
 */
html {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

* {
  padding: 0;
  margin: 0;
}

*, *:before, *:after {
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
  box-sizing: inherit;
}

/* ==========================================================================
   #RESET
   ========================================================================== */
/**
 * A very simple reset that sits on top of Normalize.css.
 */
body,
h1, h2, h3, h4, h5, h6,
blockquote, p, pre,
dl, dd, ol, ul,
figure,
hr,
fieldset, legend {
  margin: 0;
  padding: 0;
}

/**
 * Remove trailing margins from nested lists.
 */
li > ol,
li > ul {
  margin-bottom: 0;
}

/**
 * Remove default table spacing.
 */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/**
 * 1. Reset Chrome and Firefox behaviour which sets a `min-width: min-content;`
 *    on fieldsets.
 */
fieldset {
  min-width: 0;
  /* [1] */
  border: 0;
}

button {
  outline: none;
  background: none;
  border: none;
}

/* ==========================================================================
   #PAGE WRAPPER
   ========================================================================== */
.page-wrapper {
  min-height: 100vh;
}

body {
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
  font-size: 14px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

h1 {
  font-size: 36px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 15px;
}

h6 {
  font-size: 13px;
}

/* ==========================================================================
   #BACKGROUND
   ========================================================================== */
.bg-blue {
  background: #2c6ed5;
}

/* ==========================================================================
   #SPACING
   ========================================================================== */
.p-t-100 {
  padding-top: 100px;
}

.p-t-20 {
  padding-top: 20px;
}

.p-b-100 {
  padding-bottom: 100px;
}

/* ==========================================================================
   #WRAPPER
   ========================================================================== */
.wrapper {
  margin: 0 auto;
}

.wrapper--w680 {
  max-width: 680px;
}

/* ==========================================================================
   #BUTTON
   ========================================================================== */
.btn {
  line-height: 40px;
  display: inline-block;
  padding: 0 25px;
  cursor: pointer;
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
  color: #fff;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
  font-size: 14px;
  font-weight: 700;
}

.btn--radius {
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.btn--green {
  background: #57b846;
}

.btn--green:hover {
  background: #4dae3c;
}

/* ==========================================================================
   #DATE PICKER
   ========================================================================== */
td.active {
  background-color: #2c6ed5;
}

input[type="date" i] {
  padding: 14px;
}

.table-condensed td, .table-condensed th {
  font-size: 14px;
  font-family: "Roboto", "Arial", "Helvetica Neue", sans-serif;
  font-weight: 400;
}

.daterangepicker td {
  width: 40px;
  height: 30px;
}

.daterangepicker {
  border: none;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  display: none;
  border: 1px solid #e0e0e0;
  margin-top: 5px;
}

.daterangepicker::after, .daterangepicker::before {
  display: none;
}

.daterangepicker thead tr th {
  padding: 10px 0;
}

.daterangepicker .table-condensed th select {
  border: 1px solid #ccc;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  font-size: 14px;
  padding: 5px;
  outline: none;
}

/* ==========================================================================
   #FORM
   ========================================================================== */
input {
  outline: none;
  margin: 0;
  border: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  width: 100%;
  font-size: 14px;
  font-family: inherit;
}

.input-group {
  position: relative;
  margin-bottom: 30px;
  border-bottom: 2px solid #ccc;
}

.input-icon {
  position: absolute;
  font-size: 18px;
  color: #ccc;
  right: 8px;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  transform: translateY(-50%);
  cursor: pointer;
}

.input--style-1 {
  padding: 9px 0;
  color: #666;
}

.input--style-1::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #555;
}

.input--style-1:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  color: #555;
  opacity: 1;
}

.input--style-1::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #555;
  opacity: 1;
}

.input--style-1:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #555;
}

.input--style-1:-ms-input-placeholder {
  /* Microsoft Edge */
  color: #555;
}

/* ==========================================================================
   #SELECT2
   ========================================================================== */
.select--no-search .select2-search {
  display: none !important;
}

.rs-select2 .select2-container {
  width: 100% !important;
  outline: none;
}

.rs-select2 .select2-container .select2-selection--single {
  outline: none;
  border: none;
  height: 34px;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__rendered {
  line-height: 34px;
  padding-left: 0;
  color: #555;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow {
  height: 32px;
  right: 4px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow b {
  display: none;
}

.rs-select2 .select2-container .select2-selection--single .select2-selection__arrow:after {
  font-family: "Material-Design-Iconic-Font";
  content: '\f2f9';
  font-size: 18px;
  color: #ccc;
  -webkit-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.rs-select2 .select2-container.select2-container--open .select2-selection--single .select2-selection__arrow::after {
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

.select2-container--open .select2-dropdown--below {
  border: none;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  border: 1px solid #e0e0e0;
  margin-top: 5px;
  overflow: hidden;
}

/* ==========================================================================
   #TITLE
   ========================================================================== */
.title {
  margin-bottom: 37px;
}

/* ==========================================================================
   #CARD
   ========================================================================== */
.card {
  overflow: hidden;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  background: #fff;
}

.card-1 {
  -webkit-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
}

.card-1 .card-heading {
  background: url("../images/bg-head-02.jpg") center center/cover no-repeat;
  padding-top: 210px;
}

.card-1 .card-body {
  padding: 0 90px;
  padding-top: 55px;
  padding-bottom: 65px;
}

@media (max-width: 767px) {
  .card-1 .card-body {
    padding: 0 40px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
	</style>
	
</body>
</html>
