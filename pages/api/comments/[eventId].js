function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === 'POST') {
    // add server-side validation
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    console.log(newComment);

    res.status(201).json({ message: 'Added comment', comment: newComment });

    if (req.method === 'GET') {
      const dummyList = [
        { id: 'c1', name: 'Stephen', text: 'Commenting for my network' },
        { id: 'c2', name: 'Rufus', text: 'Valid point' },
      ];

      res.status(200).json({ comments: dummyList });
    }
  }
}

export default handler;
