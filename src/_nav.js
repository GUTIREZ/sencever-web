export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Example',
      url: '/example',
      icon: 'icon-direction'
    },
    {
      name: 'System',
      url: '/sm',
      icon: 'icon-settings',
      children: [
        {
          name: 'User',
          url: '/sm/user',
          icon: 'icon-user'
        },
        {
          name: 'Role',
          url: '/sm/role',
          icon: 'icon-badge'
        }
      ]
    },
    {
      name: 'Favorite ',
      url: '/favorite ',
      icon: 'icon-star'
    }
  ]
}
