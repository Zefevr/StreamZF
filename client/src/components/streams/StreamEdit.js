import React from "react"
import { connect } from "react-redux"
import { fetchStream, editStream } from "../../actions"
import StreamForm from "./StreamForm"
import _ from "lodash"

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues)
  }

  render() {
    const { stream } = this.props
    if (!stream) return <div>loading...</div>
    return (
      <div  className="ui main text container" style={{marginTop:"80px"}}>
        <h2>Edit a Stream</h2>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}
export default connect(
  mapStateToProps,
  { fetchStream, editStream }
)(StreamEdit)
