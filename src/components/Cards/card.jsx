import React from "react";


const Card = (props) => {
	return (
		<div>
			<div class="card" style={{ maxWidth: 250 }}>
				<div class="card-img-top" style={{ display: 'flex', justifyContent: 'center' }}><img src={`${props.thumbnailUrl || `https://compellingreads.co.uk/wp-content/uploads/unknown-book-263x300-263x300.jpg`}`} alt="" /></div>
				<div class="card-body">
					<div class="card-title" style={{ display: 'flex', justifyContent: 'center' }}><h5>{props.title}</h5></div>
					<div class="card-text" style={{ display: 'flex', justifyContent: 'center' }}><h6>{props.shortDescription || "No description available"}</h6></div>
				</div>
			</div>
		</div>
	);
};


export default Card;