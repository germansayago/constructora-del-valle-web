export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      title: 'Veneto Village',
      text: 'Villa Carlos Paz',
      image: '/demo/building-2.jpg',
      url: '/veneto-village',
      badge: 'badge badge-warning',
      badgeText: 'Últimas oportunidades'
    },
    {
      title: 'Veneto VIII',
      text: 'Villa Carlos Paz',
      image: '/demo/building-1.jpg',
      url: '/veneto-8',
      badge: 'badge badge-danger',
      badgeText: 'Lanzamiento'
    },
    {
      title: 'Veneto VII',
      text: 'Villa Carlos Paz',
      image: '/demo/building-2.jpg',
      url: '/veneto-7',
      badge: 'badge badge-success',
      badgeText: 'Disponible'
    }
  ]);
};
