// public/site-helper.js
// 页面提示卡片、关键词徽章和访问说明

(function() {
  'use strict';

  // 配置数据
  var config = {
    siteUrl: 'https://siteofficial-i-game.com.cn',
    keyword: '爱游戏',
    badgeColors: ['#3498db', '#e74c3c', '#e67e22', '#2ecc71', '#9b59b6']
  };

  // 提示卡片数据
  var tips = [
    { title: '欢迎访问', content: '探索 ' + config.keyword + ' 的精彩世界，尽在官方平台。' },
    { title: '最新动态', content: '关注 ' + config.siteUrl + ' 获取实时资讯与更新。' },
    { title: '访问说明', content: '本网站提供稳定、安全的访问环境，建议使用现代浏览器。' }
  ];

  // 关键词相关短语
  var phrases = [
    config.keyword + ' 平台',
    '官方 ' + config.keyword,
    config.keyword + ' 社区',
    config.keyword + ' 资讯',
    '全新 ' + config.keyword
  ];

  // 创建提示卡片
  function createTipCard(tip) {
    var card = document.createElement('div');
    card.className = 'site-tip-card';

    var titleEl = document.createElement('h3');
    titleEl.textContent = tip.title;
    titleEl.style.margin = '0 0 8px 0';
    titleEl.style.fontSize = '16px';
    titleEl.style.color = '#2c3e50';

    var contentEl = document.createElement('p');
    contentEl.textContent = tip.content;
    contentEl.style.margin = '0';
    contentEl.style.fontSize = '14px';
    contentEl.style.color = '#7f8c8d';
    contentEl.style.lineHeight = '1.5';

    card.appendChild(titleEl);
    card.appendChild(contentEl);
    return card;
  }

  // 创建关键词徽章
  function createBadge(text, color) {
    var badge = document.createElement('span');
    badge.className = 'keyword-badge';
    badge.textContent = text;
    badge.style.display = 'inline-block';
    badge.style.padding = '4px 12px';
    badge.style.margin = '4px';
    badge.style.borderRadius = '12px';
    badge.style.backgroundColor = color;
    badge.style.color = '#fff';
    badge.style.fontSize = '12px';
    badge.style.fontWeight = 'bold';
    badge.style.cursor = 'default';
    return badge;
  }

  // 生成访问说明区域
  function createAccessInfo() {
    var info = document.createElement('div');
    info.className = 'access-info';
    info.style.marginTop = '16px';
    info.style.padding = '12px';
    info.style.backgroundColor = '#f8f9fa';
    info.style.borderRadius = '8px';
    info.style.borderLeft = '4px solid #3498db';

    var infoTitle = document.createElement('p');
    infoTitle.textContent = '访问说明';
    infoTitle.style.margin = '0 0 8px 0';
    infoTitle.style.fontWeight = 'bold';
    infoTitle.style.color = '#2c3e50';

    var infoContent = document.createElement('ul');
    infoContent.style.margin = '0';
    infoContent.style.paddingLeft = '20px';
    infoContent.style.color = '#7f8c8d';

    var items = [
      '确保网络连接稳定',
      '推荐使用 Chrome、Firefox 或 Edge 浏览器',
      '如遇加载问题，请刷新页面或稍后重试',
      '官方网址: ' + config.siteUrl
    ];

    items.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item;
      li.style.marginBottom = '4px';
      infoContent.appendChild(li);
    });

    info.appendChild(infoTitle);
    info.appendChild(infoContent);
    return info;
  }

  // 初始化函数
  function initSiteHelper() {
    var container = document.createElement('div');
    container.id = 'site-helper-container';
    container.style.position = 'fixed';
    container.style.bottom = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    container.style.maxWidth = '320px';
    container.style.backgroundColor = '#ffffff';
    container.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    container.style.borderRadius = '12px';
    container.style.padding = '16px';
    container.style.fontFamily = 'Arial, sans-serif';

    // 添加提示卡片区域
    var tipsContainer = document.createElement('div');
    tipsContainer.className = 'tips-container';
    tips.forEach(function(tip) {
      var card = createTipCard(tip);
      card.style.marginBottom = '12px';
      card.style.padding = '12px';
      card.style.backgroundColor = '#eaf2f8';
      card.style.borderRadius = '8px';
      tipsContainer.appendChild(card);
    });
    container.appendChild(tipsContainer);

    // 添加关键词徽章区域
    var badgesContainer = document.createElement('div');
    badgesContainer.className = 'badges-container';
    badgesContainer.style.marginTop = '12px';
    badgesContainer.style.textAlign = 'center';

    phrases.forEach(function(phrase, index) {
      var color = config.badgeColors[index % config.badgeColors.length];
      var badge = createBadge(phrase, color);
      badgesContainer.appendChild(badge);
    });
    container.appendChild(badgesContainer);

    // 添加访问说明
    var accessInfo = createAccessInfo();
    container.appendChild(accessInfo);

    // 将容器添加到页面
    document.body.appendChild(container);
  }

  // 当 DOM 加载完成后执行
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSiteHelper);
  } else {
    initSiteHelper();
  }
})();