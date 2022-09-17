use stylist::Style;
use yew::prelude::*;

// const STYLE: &str = include_str!("home-styles.css");

#[function_component(Home)]
pub fn home() -> Html {
	// let stylesheet = Style::new(STYLE).unwrap();

	html! {
		// <div class={stylesheet}>
			<main class="home-main">
				<div id="overlay" />
				<img class="bg-image" alt={"background image"} src="assets/background.jpeg"/>

				<div class="home-content">
					<div class="headshot-text">
						<img class="headshot-image" alt={"background image"} src="assets/portfolio-headshot.jpeg" />
						<h1>{"Oscar "} <span>{"Earle"}</span></h1>
						<h3>{"Im a full stack developer"}</h3>
					</div>
				</div>
			</main>
		// </div>
	}
}