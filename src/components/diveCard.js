import React from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, CardActions, CardText } from 'react-toolbox/lib/card';
import Button from 'react-toolbox/lib/button/Button';

import { toggleDialog, openEditForm, toggleDiveDetail, deleteDive } from '../actions';
import { removeDive } from '../api';

const DiveCard = ({ 
    dive,
    index,
    toggleDetail,
    openEditForm,
    toggleDialog,
    deleteDive,
}) => (
    <Card style={diveDetailStyle} onClick={() => { toggleDiveDetail(index) }}>
        <CardTitle title={dive.site} subtitle={formatDate(new Date(dive.date))} />
        <CardText>Maximum Depth: {dive.meter} m Minutes: {dive.minute}" </CardText>
        <CardText>{dive.note}</CardText>
        <CardActions style={{justifyContent: "space-between"}}>
            <Button label='Edit Dive' onClick={(evt) => {
                evt.stopPropagation();
                openEditForm(dive);
                toggleDialog()
            }} />
            <Button label='Delete Dive' onClick={(evt) => {
                evt.stopPropagation();
                removeDive(dive.id)
                    .then(() => deleteDive(dive))
            }} />
        </CardActions>
    </Card>
);

const formatDate = (date) => (
    `${date.getDate() < 10 ? '0' : ''}${date.getDate()}/${date.getMonth() + 1 < 10 ? '0' : ''}${date.getMonth() + 1}/${date.getFullYear()}`
);

const mapStateToProps = (state, ownProps) => ({
    isCardDisplayed: state.diveDisplay === ownProps.index
});

export default connect(
    mapStateToProps,
    {
        toggleDiveDetail,
        toggleDialog,
        openEditForm,
        deleteDive,
    }
)(DiveCard);

const diveDetailStyle = {
    width: '70%',
    margin: '0 auto',
    color: "black",
    backgroundColor: "rgb(137, 178, 238)",
    boxShadow: "0.15em 0.15em black",
    border: "0.1em solid black"
};

