<script setup lang="ts">
import { EuiBadge } from 'ensemble-ui/vue'
</script>

<template>
  <div class="doc">

    <span class="flex">
      <table class="eui--table eui--simple-table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>@Spades</td>
            <td>Daniel</td>
            <td>
              <EuiBadge type="text" color="success">
                Online
              </EuiBadge>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>@Poker</td>
            <td>Isabella</td>
            <td>
              <EuiBadge type="text" color="pending">
                Offline
              </EuiBadge>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>@GoFish</td>
            <td>Idris</td>
            <td>
              <EuiBadge type="text" color="danger">
                Banned
              </EuiBadge>
            </td>
          </tr>
        </tbody>
      </table>
    </span>


    <span class="flex">
      <table class="eui--table eui--semi-striped-table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>@Spades</td>
            <td>Daniel</td>
            <td>
              <EuiBadge type="text" color="success">
                Online
              </EuiBadge>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>@Poker</td>
            <td>Isabella</td>
            <td>
              <EuiBadge type="text" color="pending">
                Offline
              </EuiBadge>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>@GoFish</td>
            <td>Idris</td>
            <td>
              <EuiBadge type="text" color="danger">
                Banned
              </EuiBadge>
            </td>
          </tr>
        </tbody>
      </table>
    </span>


    <span class="flex">
      <table class="eui--table eui--full-lined-table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>@Spades</td>
            <td>Daniel</td>
            <td>
              <EuiBadge type="text" color="success">
                Online
              </EuiBadge>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>@Poker</td>
            <td>Isabella</td>
            <td>
              <EuiBadge type="text" color="pending">
                Offline
              </EuiBadge>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>@GoFish</td>
            <td>Idris</td>
            <td>
              <EuiBadge type="text" color="danger">
                Banned
              </EuiBadge>
            </td>
          </tr>
        </tbody>
      </table>
    </span>


    <span class="flex">
      <table class="eui--table eui--full-striped-table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>@Spades</td>
            <td>Daniel</td>
            <td>
              <EuiBadge type="text" color="success">
                Online
              </EuiBadge>
            </td>
          </tr>

          <tr>
            <td>2</td>
            <td>@Poker</td>
            <td>Isabella</td>
            <td>
              <EuiBadge type="text" color="pending">
                Offline
              </EuiBadge>
            </td>
          </tr>

          <tr>
            <td>3</td>
            <td>@GoFish</td>
            <td>Idris</td>
            <td>
              <EuiBadge type="text" color="danger">
                Banned
              </EuiBadge>
            </td>
          </tr>
        </tbody>
      </table>
    </span>

  </div>
</template>