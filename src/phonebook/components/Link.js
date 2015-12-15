import React from 'react';

/**
 * Generic Link class
 */
class Link extends React.Component {

    render () {
        const { active, children, onClick, id } = this.props;
        if (active) {
            return <span>{children}</span>;
        }
        return <div>
                    <a onClick={e => {
                        e.preventDefault();
                        onClick(id);
                    }}>{children}</a>
               </div>;
    }

}

Link.propTypes = {
    id: React.PropTypes.number.isRequired,
    active: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
    children: React.PropTypes.node.isRequired
}

export default Link;
