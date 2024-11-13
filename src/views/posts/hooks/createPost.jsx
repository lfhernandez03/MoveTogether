import React from "react";

const createPost = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: formData.title,
      content: formData.content,
      image: formData.image,
    };
    try {
      const response = await fetch('https://move-together-back.vercel.app/api/crear/publicacion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Publicación creada con éxito');
      } else {
        toast.error(data.message || 'Error al crear la publicación');
      }
    } catch (error) {
      console.log('Error:', error);
      toast.error('Error al crear la publicación');
    }
  };
};

export default createPost;
