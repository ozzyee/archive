use stylist::Style;
use yew::prelude::*;
use stylist::yew::styled_component;

pub mod components {
	pub mod button;
	pub mod nav;
	pub mod title;
}

pub mod pages {
	pub mod index;
}

pub mod layouts {
	pub mod home;
	pub mod about_me;
}

use components::nav::*;
use pages::index::*;

// const STYLE: &str = include_str!("main.css");

#[styled_component(App)]
fn app() -> Html {
	// let stylesheet = Style::new(STYLE).unwrap();
	html! {
		<>
		// <div class={stylesheet}>
			<Nav />
			<Index/>
		// </div>
		</>
	}
}

fn main() {
	yew::start_app::<App>();
}