import { EuiButton } from 'ensemble-ui/react'

export default function ButtonPage() {
  return (
    <div className="doc">
      <span className="flex">
        <h4 className="title">primary - normal buttons:</h4>
        <EuiButton size='sm' variant='primary'>Small Primary</EuiButton>
        <EuiButton size='md' variant='primary'>Medium Primary</EuiButton>
        <EuiButton size='lg' variant='primary'>large Primary</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">success - normal buttons:</h4>
        <EuiButton size='sm' variant='success'>Small success</EuiButton>
        <EuiButton size='md' variant='success'>Medium success</EuiButton>
        <EuiButton size='lg' variant='success'>large success</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">info - normal buttons:</h4>
        <EuiButton size='sm' variant='info'>Small info</EuiButton>
        <EuiButton size='md' variant='info'>Medium info</EuiButton>
        <EuiButton size='lg' variant='info'>large info</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">warning - normal buttons:</h4>
        <EuiButton size='sm' variant='warning'>Small warning</EuiButton>
        <EuiButton size='md' variant='warning'>Medium warning</EuiButton>
        <EuiButton size='lg' variant='warning'>large warning</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">danger - normal buttons:</h4>
        <EuiButton size='sm' variant='danger'>Small danger</EuiButton>
        <EuiButton size='md' variant='danger'>Medium danger</EuiButton>
        <EuiButton size='lg' variant='danger'>large danger</EuiButton>
      </span>
      <span className="divider"></span>
      <span className="flex">
        <h4 className="title">primary - outline buttons:</h4>
        <EuiButton mode='outline' size='sm' variant='primary'>Small Primary</EuiButton>
        <EuiButton mode='outline' size='md' variant='primary'>Medium Primary</EuiButton>
        <EuiButton mode='outline' size='lg' variant='primary'>large Primary</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">success - outline buttons:</h4>
        <EuiButton mode='outline' size='sm' variant='success'>Small success</EuiButton>
        <EuiButton mode='outline' size='md' variant='success'>Medium success</EuiButton>
        <EuiButton mode='outline' size='lg' variant='success'>large success</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">info - outline buttons:</h4>
        <EuiButton mode='outline' size='sm' variant='info'>Small info</EuiButton>
        <EuiButton mode='outline' size='md' variant='info'>Medium info</EuiButton>
        <EuiButton mode='outline' size='lg' variant='info'>large success</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">info - outline buttons:</h4>
        <EuiButton mode='outline' size='sm' variant='info'>Small info</EuiButton>
        <EuiButton mode='outline' size='md' variant='info'>Medium info</EuiButton>
        <EuiButton mode='outline' size='lg' variant='info'>large info</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">warning - outline buttons:</h4>
        <EuiButton mode='outline' size='sm' variant='warning'>Small warning</EuiButton>
        <EuiButton mode='outline' size='md' variant='warning'>Medium warning</EuiButton>
        <EuiButton mode='outline' size='lg' variant='warning'>large warning</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">danger - outline buttons:</h4>
        <EuiButton mode='outline' size='sm' variant='danger'>Small danger</EuiButton>
        <EuiButton mode='outline' size='md' variant='danger'>Medium danger</EuiButton>
        <EuiButton mode='outline' size='lg' variant='danger'>large danger</EuiButton>
      </span>
      <span className="divider"></span>
      <span className="flex">
        <h4 className="title">primary - text-button buttons:</h4>
        <EuiButton mode='text-button' size='sm' variant='primary'>Small Primary</EuiButton>
        <EuiButton mode='text-button' size='md' variant='primary'>Medium Primary</EuiButton>
        <EuiButton mode='text-button' size='lg' variant='primary'>large Primary</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">success - text-button buttons:</h4>
        <EuiButton mode='text-button' size='sm' variant='success'>Small success</EuiButton>
        <EuiButton mode='text-button' size='md' variant='success'>Medium success</EuiButton>
        <EuiButton mode='text-button' size='lg' variant='success'>large success</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">info - text-button buttons:</h4>
        <EuiButton mode='text-button' size='sm' variant='info'>Small info</EuiButton>
        <EuiButton mode='text-button' size='md' variant='info'>Medium info</EuiButton>
        <EuiButton mode='text-button' size='lg' variant='info'>large info</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">warning - text-button buttons:</h4>
        <EuiButton mode='text-button' size='sm' variant='warning'>Small warning</EuiButton>
        <EuiButton mode='text-button' size='md' variant='warning'>Medium warning</EuiButton>
        <EuiButton mode='text-button' size='lg' variant='warning'>large warning</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">danger - text-button buttons:</h4>
        <EuiButton mode='text-button' size='sm' variant='danger'>Small danger</EuiButton>
        <EuiButton mode='text-button' size='md' variant='danger'>Medium danger</EuiButton>
        <EuiButton mode='text-button' size='lg' variant='danger'>large danger</EuiButton>
      </span>
      <span className="flex">
        <h4 className="title">neutral buttons:</h4>
        <EuiButton variant='neutral'>Small neutral</EuiButton>
        <EuiButton variant='neutral'>Medium neutral</EuiButton>
        <EuiButton variant='neutral'>large neutral</EuiButton>
      </span>
      <span className="divider"></span>
      <span className="flex">
        <h4 className="title">primary - text-button buttons:</h4>
        <EuiButton nativeAttrs={{ "disabled": "true" }}>Small Primary</EuiButton>
        <EuiButton nativeAttrs={{ "disabled": "true" }}>Medium Primary</EuiButton>
        <EuiButton nativeAttrs={{ "disabled": "true" }}>large Primary</EuiButton>
      </span>

    </div>
  )
}