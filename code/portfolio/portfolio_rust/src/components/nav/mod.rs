use stylist::Style;
use yew::prelude::*;
use stylist::yew::styled_component;

// const STYLE: &str = include_str!("nav-style.css");

#[styled_component(Nav)]
pub fn nav() -> Html {
	// let stylesheet = Style::new(STYLE).unwrap();

	html! {
		// <div class={stylesheet}>
			<nav>
				<ul>
					<li>{"Home"}</li>
					<li>{"About"}</li>
					<li>{"Skills"}</li>
					<li>{"Projects"}</li>
					<li>{"Contact"}</li>
				</ul>
			</nav>
		// </div>
	}
}