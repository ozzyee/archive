use yew::{function_component, html, Properties, Callback};

#[derive(Properties, PartialEq)]
pub struct Props {
	pub button_text: String,
	pub onclick: Callback<String>,
}

#[function_component(Button)]
pub fn button(props: &Props) -> () {
	let onclick = props.onclick.clone();
	let onclick = move |_| {
		onclick.emit("Hi Dad".to_string());
	};

	html! {
      <button onclick={onclick}  >{format!("{}", props.button_text)}</button>
    }
}
