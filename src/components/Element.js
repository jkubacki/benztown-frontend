import React from 'react';
import { elementPropType } from 'constants/propTypes';
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
  element: elementPropType.isRequired,
};

export default Element;
