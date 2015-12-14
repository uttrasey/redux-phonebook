import React from 'react';

class Link extends React.Component {

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
    active: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
    children: React.PropTypes.node
}

export default Link;
