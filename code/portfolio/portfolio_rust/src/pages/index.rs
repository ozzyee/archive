use yew::prelude::*;
use stylist::yew::styled_component;
use crate::layouts;
use layouts::home::*;
use layouts::about_me::*;

#[styled_component(Index)]
pub fn index() -> Html {
	html! {
		<>
		<main class="main-wrapper">
			<div class="main-content">
				// <Home />
				<AboutMe />
			</div>
		</main>
		</>
	}
}

