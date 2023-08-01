<script>
    import {
      Header,
      HeaderUtilities,
      HeaderAction,
      HeaderGlobalAction,
      HeaderPanelLinks,
      HeaderPanelDivider,
      HeaderPanelLink,
      SideNav,
      SideNavItems,
      SideNavMenu,
      SideNavMenuItem,
      SideNavLink,
      SkipToContent,
      Content,
      Grid,
      Row,
      Column,
      HeaderActionLink,
    } from "carbon-components-svelte";
    import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";
    import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
    import "carbon-components-svelte/css/g90.css";
    import Menu from "./menu.svelte";
  
    let isSideNavOpen = false;
    let isOpen1 = false;
    let isOpen2 = false;
  </script>
  
  <Header company="SprintEins" platformName="Heimat" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <HeaderUtilities>
        <HeaderActionLink aria-label="Settings" icon={SettingsAdjust} href="/settings" />
      <!-- <HeaderAction
        bind:isOpen={isOpen1}
        icon={UserAvatarFilledAlt}
        closeIcon={UserAvatarFilledAlt}
      >
        <HeaderPanelLinks>
          <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
          <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
          <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
          <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
          <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
          <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
          <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
          <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
          <HeaderPanelDivider>Switcher subject 3</HeaderPanelDivider>
          <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
        </HeaderPanelLinks>
      </HeaderAction> -->
      <!-- <HeaderAction bind:isOpen={isOpen2}>
        <HeaderPanelLinks>
          <HeaderPanelDivider>Switcher subject 1</HeaderPanelDivider>
          <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
          <HeaderPanelDivider>Switcher subject 2</HeaderPanelDivider>
          <HeaderPanelLink>Switcher item 1</HeaderPanelLink>
          <HeaderPanelLink>Switcher item 2</HeaderPanelLink>
          <HeaderPanelLink>Switcher item 3</HeaderPanelLink>
          <HeaderPanelLink>Switcher item 4</HeaderPanelLink>
          <HeaderPanelLink>Switcher item 5</HeaderPanelLink>
        </HeaderPanelLinks>
      </HeaderAction> -->
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
  