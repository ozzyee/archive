use stylist::Style;
use yew::prelude::*;
use stylist::yew::styled_component;

#[derive(Properties, PartialEq)]
pub struct TitleProps {
	pub title: String,
	pub sub_title: String,
}

// const STYLES: &str = include_str!("title-styles.css");

#[styled_component(Title)]
pub fn title(props: &TitleProps) -> Html {
	let TitleProps { title, sub_title } = props;
	// let stylesheet = Style::new(STYLES).unwrap();

	html! {
		// <div class={stylesheet}>
			<div class="title-wrapper">
				<h1 class="title">{title}</h1>
				<h2 class="sub-title">{sub_title}</h2>
			</div>
		// </div>
	}
}

