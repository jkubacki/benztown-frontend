import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Element extends React.Component {
  render() {
    const { element } = this.props;
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
    )
  }
}

export default Element;
