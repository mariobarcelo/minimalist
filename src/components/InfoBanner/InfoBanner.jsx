import React from 'react';
import styles from './InfoBanner.module.css';

function InfoBanner() {
	return (
		<div className={styles.banner}>
			<p>ℹ️ This app will work using an API</p>
		</div>
	);
}

export default InfoBanner;
