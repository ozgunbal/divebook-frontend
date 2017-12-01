import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDialog, openEditForm, toggleDiveDetail } from '../actions';

let DiveCard = ({ 
    dive,
    index,
    toggleDetail,
    openForm,
    toggle,
}) => (
    <Card style={diveDetailStyle} onClick={() => { toggleDetail(index) }}>
        <CardTitle title={dive.site} subtitle={dive.date.toDateString()} />
        <CardText>Maximum Depth: {dive.meter} m Minutes: {dive.minute}" </CardText>
        <CardText>{dive.notes}</CardText>
        <CardActions>
            <Button label='Edit Dive' onClick={(evt) => {
                evt.stopPropagation();
                openForm(dive);
                toggle()
            }} />
        </CardActions>
    </Card>
);

const mapStateToProps = (state, ownProps) => ({
    isCardDisplayed: state.diveDisplay === ownProps.index
});

const mapDispatchToProps = (dispatch) => ({
    toggleDetail: index => dispatch(toggleDiveDetail(index)),
    toggle: () => dispatch(toggleDialog()),
    openForm: dive => dispatch(openEditForm(dive)),
})

DiveCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(DiveCard);

export default DiveCard;

const diveDetailStyle = {
    width: '70%',
    margin: '0 auto'
};

