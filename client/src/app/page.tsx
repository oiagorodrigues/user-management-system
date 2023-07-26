export default function Home() {
  return (
    <main className='min-h-screen p-24'>
      <section>
        <h1>Users</h1>

        <table>
          <thead>
            <tr>
              <td></td>
              <td>Name</td>
              <td>E-mail</td>
              <td>Phone</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Iago Rodrigues</td>
              <td>iago@teste.com</td>
              <td>(11) 1111-1111</td>
              <td>
                <button>Editar</button>
                <button>Remover</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Jhon Doe</td>
              <td>jhon@doe.com</td>
              <td>(11) 1111-1111</td>
              <td>
                <button>Editar</button>
                <button>Remover</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <p>Paginação</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
