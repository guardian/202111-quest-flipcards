import { Component, render, h } from "preact";
import { useRef } from "preact/hooks";
import FlipIcon from "./FlipIcon";

export default class FlipCard extends Component {

    componentWillMount() {
        this.setState({'flipped': false});
    }

    componentDidMount() {
        this.ref.current.style.setProperty('--cardbg', this.props.bgcolor);
    }

    handeClick() {
        this.setState({'flipped': !this.state.flipped});
    }

    ref = useRef();

    render(props, state) {
        
        // const img = props.id == '1' ? `<%= path %>/1.jpg`: `<%= path %>/card_${props.id}.svg`;
        return (
            <div ref={this.ref} class={ `flipcard ${state.flipped? 'active': ''}`} data-id={props.id}>
                <div class="card-body">
                    
                    <div class="back">
                        <div class="content">
                            <div class="border"></div>
                            <div dangerouslySetInnerHTML={{__html: props.back}}></div>
                        </div>
                        <button class="btn-flip" onclick={this.handeClick.bind(this)}><FlipIcon/></button>
                    </div>
                    <a name={`card${props.id}`} class="front" onclick={this.handeClick.bind(this)}>
                        <div class="content" style={{
                            backgroundImage: ` linear-gradient(to top, #0008, transparent 54%), url(<%= path %>/${props.image})`
                        }}>
                            <div class="border"></div>
                            {/* <img src={img} alt="" class={props.imagePos} /> */}
                            <h2 dangerouslySetInnerHTML={{__html: props.front}}></h2>
                        </div>
                        <button class="btn-flip"><FlipIcon/></button>
                    </a>
                </div>
            </div>
        )
    }
}