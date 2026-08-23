import { useState } from 'react'
import { EuiButton, EuiSnackbar } from 'ensemble-ui/react'

export default function SnackbarPage() {
  const [open, setOpen] = useState<boolean[]>(
    Array(13).fill(false)
  )

  const showSnackbar = (index: number) => {
    setOpen(current => {
      const next = [...current]
      next[index] = true
      return next
    })
  }

  return (
    <div className="doc">

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(1)}
          mode="text-button"
          variant="info"
        >
          light
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[1]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 1 ? false : value)
              )
            }
            awake-time={3000} dismiss={false} variant="info" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(2)}
          mode="text-button"
          variant="warning"
        >
          light
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[2]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 2 ? false : value)
              )
            }
            awake-time={3000} dismiss={false} variant="warning" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(3)}
          mode="text-button"
          variant="danger"
        >
          light
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[3]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 3 ? false : value)
              )
            }
            awake-time={3000} dismiss={false} variant="danger" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(4)}
          mode="text-button"
          variant="success"
        >
          light
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[4]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 4 ? false : value)
              )
            }
            awake-time={3000} dismiss={false} variant="success" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" />

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(5)}
          mode="text-button"
          variant="info"
        >
          Header
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[5]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 5 ? false : value)
              )
            }
            awake-time={3000} dismiss={false} variant="info" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(6)}
          mode="text-button"
          variant="warning"
        >
          Header
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[6]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 6 ? false : value)
              )
            }
            awake-time={3000} dismiss={false} variant="warning" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(7)}
          mode="text-button"
          variant="danger"
        >
          Header
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[7]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 7 ? false : value)
              )
            }
            awake-time={3000} dismiss={false} variant="danger" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(8)}
          mode="text-button"
          variant="success"
        >
          Header
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[8]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 8 ? false : value)
              )
            }
            awake-time={3000} dismiss={false} variant="success" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" />

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(9)}
          mode="text-button"
          variant="info"
        >
          Header - dissmiss
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[9]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 9 ? false : value)
              )
            }
            awake-time={3000} dismiss={true} variant="info" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(10)}
          mode="text-button"
          variant="warning"
        >
          Header - dissmiss
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[10]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 10 ? false : value)
              )
            }
            awake-time={3000} dismiss={true} variant="warning" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(11)}
          mode="text-button"
          variant="danger"
        >
          Header - dissmiss
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[11]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 11 ? false : value)
              )
            }
            awake-time={3000} dismiss={true} variant="danger" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

      <span className="flex" style={{ width: '50vw' }}>
        <EuiButton
          onClick={() => showSnackbar(12)}
          mode="text-button"
          variant="success"
        >
          Header - dissmiss
        </EuiButton>

        <span className="snackbar-container" style={{ width: '100%' }}>
          <EuiSnackbar open={open[12]}
            onDismissing={() =>
              setOpen(current =>
                current.map((value, index) => index === 12 ? false : value)
              )
            }
            awake-time={3000} dismiss={true} variant="success" header="New Update!" message="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
        </span>
      </span>

    </div>
  )
}