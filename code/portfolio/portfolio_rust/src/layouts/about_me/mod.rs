use std::collections::HashMap;
use gloo::console::info;
use stylist::Style;
use yew::prelude::*;
use stylist::yew::styled_component;
use crate::components;
use components::title::*;

// const STYLE: &str = include_str!("about-me-style.css");

struct ContactInfo {
	key: String,
	value: String,
}

#[styled_component(AboutMe)]
pub fn about_me() -> Html {
	// let stylesheet = Style::new(STYLE).unwrap();

	let contact_info = vec![
		ContactInfo {
			key: String::from("Name"),
			value: String::from("Oscar Earle"),
		},
		ContactInfo {
			key: String::from("Email"),
			value: String::from("ozzye561@gmail.com"),
		},
		ContactInfo {
			key: String::from("From"),
			value: String::from("birmingham, UK"),
		},
	];

	let contact_info_html = contact_info.iter().map(|info| html! {
		<div class="contact-info-wrapper">
	    <p>{format!("{}:", info.key)}</p>
	    <p class={if(info.key == "Email") { "email" } else { "" }}>{
				format!("{}",  info.value)}
			</p>
		</div>
	}).collect::<Html>();

	html! {
		// <div class={stylesheet}>
			<main class="about-me-main-content">
				<Title
					title={"About me"}
					sub_title={"get to know me"}
				/>

				<div class="about_me-content-wrapper">
		      <div class="about_me-img-wrapper">
	          <img src="assets/about-me.jpg" alt="avatar" />
					</div>

					<div class="about_me-main-content-wrapper">
						<p class="about_me-subtitle">{"who am I?"}</p>
						<p class="about_me-subtitle-lg">{"I’m Oscar Earle a full stack web developer"}</p>
						<p class="about_me-description">{"I am a softwere engineer based in Berimingham and have been building websites and apps for over a year. I love the way i can build and develop any things out of  code. come and have a look at my portfolio and youll see how pashionat i am about coding.I am a softwere engineer based in Berimingham and have been building websites and apps for over a year. I love the way i can build and develop any things out of  code. come and have a look at my portfolio and youll see how pashionat i am about coding.I am a softwere engineer based in Berimingham and have been building websites and apps for over a year. I love the way i can build and develop any things out of  code. come and have a look at my portfolio and youll see how pashionat i am about coding."}</p>
						<div class="spacer" />

						// contact info
						<div class="info-wrapper">
							{contact_info_html}
							<button>{"Download Cv"}</button>
						</div>
					</div>
				</div>
			</main>
		// </div>
	}
}