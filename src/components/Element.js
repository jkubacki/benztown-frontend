import React from 'react';
import PropTypes from 'prop-types';
import ReactAudioPlayer from 'react-audio-player';

function Element({ element }) {
  return (
    <tr>
      <td>
        {element.attributes.name}
      </td>
      <td>
        <ReactAudioPlayer
          src={element.attributes.file}
          controls
        />
      </td>
      <td>
        { element.attributes.tag_list.join(', ') }
      </td>
    </tr>
  );
}

Element.propTypes = {
  element: PropTypes.shape({
    attributes: PropTypes.shape({
      name: PropTypes.string.isRequired,
      file: PropTypes.string.isRequired,
      tag_list: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Element;
