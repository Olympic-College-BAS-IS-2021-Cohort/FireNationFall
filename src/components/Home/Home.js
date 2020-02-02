import React from 'react';
import {Segment} from 'semantic-ui-react';


export default (props) => (
	<div>
		<Segment style={{borderRadius: "0", minHeight: "93vh"}} color={'red'} inverted secondary>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur assumenda, dicta ea enim
			eveniet exercitationem facere fugit harum inventore molestiae natus nisi, nobis non odio, perferendis
			suscipit ut voluptatum.
		</Segment>
		<Segment style={{borderRadius: "0", minHeight: "93vh"}} secondary>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur assumenda, dicta ea enim
			eveniet exercitationem facere fugit harum inventore molestiae natus nisi, nobis non odio, perferendis
			suscipit ut voluptatum.
		</Segment>
	</div>
);

