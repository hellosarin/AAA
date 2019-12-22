import React from 'react'

function Info() {
	return (
		<div>
			<h2 style={{ fontSize: '60px', color: '#a3b419', fontWeight: 'bold' }}>
				Resume Page
			</h2>
			<div className="field">
				<label className="label">Name</label>
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="Text input"
						style={{ width: '500px' }}
					/>
				</div>
			</div>

			<div className="field">
				<label className="label">Surname</label>
				<div className="control">
					<input
						className="input"
						type="text"
						placeholder="Text input"
						style={{ width: '500px' }}
					/>
				</div>
			</div>

			<div className="field">
				<label className="label">Photo</label>
				<div className="control">
					<div className="file has-name">
						<label className="file-label">
							<input className="file-input" type="file" name="resume" />
							<span className="file-cta">
								<span className="file-icon">
									<i className="fas fa-upload"></i>
								</span>
								<span className="file-label">Choose a file…</span>
							</span>
							<span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Info
