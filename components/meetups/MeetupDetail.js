import styles from './MeetupDetail.module.css';

const MeetupDetail = (props) => {
	return (
		<div className={styles.container}>
			<img src={props.img} alt={props.title} />
			<title>{props.title}</title>
			<address>{props.address}</address>
			<div>{props.description}</div>
		</div>
	);
};

export default MeetupDetail;
