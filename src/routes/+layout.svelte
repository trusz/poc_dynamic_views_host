<script>
    import {
      Header,
      HeaderUtilities,
      SideNav,
      SkipToContent,
      Content,
      Grid,
      Row,
      Column,
      HeaderActionLink,
    } from "carbon-components-svelte";
    import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";
    import "carbon-components-svelte/css/g90.css";
    import Menu from "./menu.svelte";
  
    let isSideNavOpen = false;
  </script>
  
  <Header company="SprintEins" platformName="MICRO Admin" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderUtilities>
        <HeaderActionLink aria-label="Settings" icon={SettingsAdjust} href="/settings" />
    </HeaderUtilities>
  </Header>
  
  <SideNav bind:isOpen={isSideNavOpen}>
    <Menu />
  </SideNav>
  
  <Content>
    <Grid>
      <Row>
        <Column>
          <slot></slot>
        </Column>
      </Row>
    </Grid>
  </Content>
  