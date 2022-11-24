import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
	{
		id: 'm1',
		title: 'Mugla',
		image: 'https://cdnuploads.aa.com.tr/uploads/Contents/2019/03/12/thumbs_b_c_50a74c1fbe00062b92ea1754b2a88215.jpg',
		address: '269 Sok. No: 12/1 Kotekli Mugla',
		description: 'This is a description',
	},
	{
		id: 'm2',
		title: 'Marmaris',
		image: 'https://cdnuploads.aa.com.tr/uploads/Contents/2019/03/12/thumbs_b_c_50a74c1fbe00062b92ea1754b2a88215.jpg',
		address: '269 Sok. No: 12/1 Kotekli Mugla',
		description: 'This is a description',
	},
	{
		id: 'm3',
		title: 'Bodrum',
		image: 'https://cdnuploads.aa.com.tr/uploads/Contents/2019/03/12/thumbs_b_c_50a74c1fbe00062b92ea1754b2a88215.jpg',
		address: '269 Sok. No: 12/1 Kotekli Mugla',
		description: 'This is a description',
	},
];

const MeetupsPage = (props) => {
	return <MeetupList meetups={props.meetups} />;
};
export const getStaticProps = async () => {
	return {
		props: {
			meetups: DUMMY_DATA,
		},
		revalidate: 10,
	};
};

export default MeetupsPage;
