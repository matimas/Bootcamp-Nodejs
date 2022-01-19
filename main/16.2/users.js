const users = [
	{
		username: 'shaked',
		useremail: 'shaked@erere.vom',
		userposts: [
			{
				post: 'shaked post',
				comments: [
					{
						content: 'ernest liked your post',
					},
				],
			},
		],
	},
	{
		username: 'daniel',
		useremail: 'daniel@erere.com',
		userposts: [
			{
				post: 'daniel post',
				comments: [
					{
						content: 'shaked liked your post',
					},
				],
			},
		],
	},
	{
		username: 'shani',
		useremail: 'shani@erere.com',
		userposts: [
			{
				post: 'shani post',
				comments: [
					{
						content: 'rotem liked your post',
					},
				],
			},
		],
	},
	{
		username: 'rotem',
		useremail: 'rotem@erere.com',
		userposts: [
			{
				post: 'daniel post',
				comments: [
					{
						content: 'shani liked your post',
					},
				],
			},
		],
	},
];

module.exports = users;
