import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Col, Grid, Row } from 'react-bootstrap/lib';
import * as fromImage from '../reducers/ui/image/api';
import noIdea from '../../assets/images/dog/no-idea.jpg';

const Image = ({ isImageShown, toggleImage }) => (
  <Grid>
    <Row className="margin-bottom-sm">
      <Col>
        <Button
          onClick={toggleImage}
          onKeyDown={toggleImage}
          role="button"
          tabIndex={0}
        >
          Toggle image
        </Button>
      </Col>
    </Row>
    {isImageShown && (
      <Row>
        <Col>
          <img alt="dog typing" src={noIdea} />
        </Col>
      </Row>
    )}
  </Grid>
);

Image.propTypes = {
  isImageShown: PropTypes.bool.isRequired,
  toggleImage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isImageShown: fromImage.getIsImageShown(state),
});

const mapDispatchToProps = {
  toggleImage: fromImage.toggleImage,
};

const ImageConnected = connect(mapStateToProps, mapDispatchToProps)(Image);

export { ImageConnected as Image };
