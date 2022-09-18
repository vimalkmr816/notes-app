import dayjs from "dayjs"
import React from "react"
import useStyles from "../../styles/MainScreen/markdownText"

const MarkdownScreen = props => {
	const date = dayjs().format("MMM D, YYYY h:mm A")
	const { setNote, note, setMarkdown } = props
	const handleSetNote = e => {
		setNote({ ...note, title: e.target.value, date: date })
		setMarkdown(e.target.value)
	}

	const classes = useStyles()
	return (
		<div className={classes.markdownScreenContainer}>
			<textarea type="text" onChange={e => handleSetNote(e)} className={classes.inputSection} />
		</div>
	)
}

export default MarkdownScreen
