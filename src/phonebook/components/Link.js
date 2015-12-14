import React from 'react';

class Link extends Component {

    render () {
        const { active, children, onClick } = this.props;
        if (active) {
            return <span>{children}</span>;
        }
        return <div>
                    <a onClick={e => {
                        e.preventDefault();
                        onClick();
                    }}>{children}</a>
               </div>;
    }

}

Link.propTypes = {
    active: React.PropTypes.boolean.isRequired,
    children: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired
}

export default Link;
