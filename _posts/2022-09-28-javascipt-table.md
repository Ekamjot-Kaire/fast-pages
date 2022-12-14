---
keywords: fastai
title: JavaScript Table
nb_path: _notebooks/2022-09-28-javascipt-table.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/2022-09-28-javascipt-table.ipynb
-->

<div class="container" id="notebook-container">
        
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="o">//</span> <span class="n">define</span> <span class="n">a</span> <span class="n">function</span> <span class="n">to</span> <span class="n">hold</span> <span class="n">data</span> <span class="k">for</span> <span class="n">a</span> <span class="n">Person</span>
<span class="n">function</span> <span class="n">Person</span><span class="p">(</span><span class="n">name</span><span class="p">,</span> <span class="n">ghID</span><span class="p">,</span> <span class="n">job</span><span class="p">)</span> <span class="p">{</span>
    <span class="n">this</span><span class="o">.</span><span class="n">name</span> <span class="o">=</span> <span class="n">name</span><span class="p">;</span>
    <span class="n">this</span><span class="o">.</span><span class="n">ghID</span> <span class="o">=</span> <span class="n">ghID</span><span class="p">;</span>
    <span class="n">this</span><span class="o">.</span><span class="n">job</span> <span class="o">=</span> <span class="n">job</span><span class="p">;</span>
    <span class="n">this</span><span class="o">.</span><span class="n">role</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
<span class="p">}</span>

<span class="o">//</span> <span class="n">define</span> <span class="n">a</span> <span class="n">setter</span> <span class="k">for</span> <span class="n">role</span> <span class="ow">in</span> <span class="n">Person</span> <span class="n">data</span>
<span class="n">Person</span><span class="o">.</span><span class="n">prototype</span><span class="o">.</span><span class="n">setRole</span> <span class="o">=</span> <span class="n">function</span><span class="p">(</span><span class="n">role</span><span class="p">)</span> <span class="p">{</span>
    <span class="n">this</span><span class="o">.</span><span class="n">role</span> <span class="o">=</span> <span class="n">role</span><span class="p">;</span>
<span class="p">}</span>

<span class="o">//</span> <span class="n">define</span> <span class="n">a</span> <span class="n">JSON</span> <span class="n">conversion</span> <span class="s2">&quot;method&quot;</span> <span class="n">associated</span> <span class="k">with</span> <span class="n">Person</span>
<span class="n">Person</span><span class="o">.</span><span class="n">prototype</span><span class="o">.</span><span class="n">toJSON</span> <span class="o">=</span> <span class="n">function</span><span class="p">()</span> <span class="p">{</span>
    <span class="n">const</span> <span class="n">obj</span> <span class="o">=</span> <span class="p">{</span><span class="n">name</span><span class="p">:</span> <span class="n">this</span><span class="o">.</span><span class="n">name</span><span class="p">,</span> <span class="n">ghID</span><span class="p">:</span> <span class="n">this</span><span class="o">.</span><span class="n">ghID</span><span class="p">,</span> <span class="n">job</span><span class="p">:</span> <span class="n">this</span><span class="o">.</span><span class="n">job</span><span class="p">,</span> <span class="n">role</span><span class="p">:</span> <span class="n">this</span><span class="o">.</span><span class="n">role</span><span class="p">};</span>
    <span class="n">const</span> <span class="n">json</span> <span class="o">=</span> <span class="n">JSON</span><span class="o">.</span><span class="n">stringify</span><span class="p">(</span><span class="n">obj</span><span class="p">);</span>
    <span class="k">return</span> <span class="n">json</span><span class="p">;</span>
<span class="p">}</span>

<span class="o">//</span> <span class="n">make</span> <span class="n">a</span> <span class="n">new</span> <span class="n">Person</span> <span class="ow">and</span> <span class="n">assign</span> <span class="n">to</span> <span class="n">variable</span> <span class="n">teacher</span>
<span class="n">var</span> <span class="n">teacher</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Mr Yeung&quot;</span><span class="p">,</span> <span class="s2">&quot;jm1021&quot;</span><span class="p">,</span> <span class="s2">&quot;none&quot;</span><span class="p">);</span>
<span class="n">teacher</span><span class="o">.</span><span class="n">setRole</span><span class="p">(</span><span class="s2">&quot;Teacher&quot;</span><span class="p">);</span>
</pre></div>

    </div>
</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="o">//</span> <span class="n">defining</span> <span class="n">team</span> 
<span class="n">var</span> <span class="n">team</span> <span class="o">=</span> <span class="p">[</span> 
    <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Ishi&quot;</span><span class="p">,</span> <span class="s2">&quot;Random-IGN&quot;</span><span class="p">,</span> <span class="s2">&quot;Frontend Developer&quot;</span><span class="p">),</span>
    <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Shreyas&quot;</span><span class="p">,</span> <span class="s2">&quot;Henerystone&quot;</span><span class="p">,</span> <span class="s2">&quot;Scrum Master&quot;</span><span class="p">),</span>
    <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Lily&quot;</span><span class="p">,</span> <span class="s2">&quot;lwu1822&quot;</span><span class="p">,</span> <span class="s2">&quot;Backend Developer&quot;</span><span class="p">),</span>
    <span class="n">new</span> <span class="n">Person</span><span class="p">(</span><span class="s2">&quot;Ekam&quot;</span><span class="p">,</span> <span class="s2">&quot;Ekamjot-Kaire&quot;</span><span class="p">,</span> <span class="s2">&quot;DevOps&quot;</span><span class="p">)</span>
<span class="p">];</span>

<span class="o">//</span> <span class="n">define</span> <span class="n">a</span> <span class="n">classroom</span> <span class="ow">and</span> <span class="n">build</span> <span class="n">Classroom</span> <span class="n">objects</span> <span class="ow">and</span> <span class="n">json</span>
<span class="n">function</span> <span class="n">Classroom</span><span class="p">(</span><span class="n">teacher</span><span class="p">,</span> <span class="n">team</span><span class="p">){</span> <span class="o">//</span> <span class="mi">1</span> <span class="n">teacher</span><span class="p">,</span> <span class="n">many</span> <span class="n">student</span>
    <span class="o">//</span> <span class="n">start</span> <span class="n">Classroom</span> <span class="k">with</span> <span class="n">Teacher</span>
    <span class="n">teacher</span><span class="o">.</span><span class="n">setRole</span><span class="p">(</span><span class="s2">&quot;Teacher&quot;</span><span class="p">);</span>
    <span class="n">this</span><span class="o">.</span><span class="n">teacher</span> <span class="o">=</span> <span class="n">teacher</span><span class="p">;</span>
    <span class="n">this</span><span class="o">.</span><span class="n">classroom</span> <span class="o">=</span> <span class="p">[</span><span class="n">teacher</span><span class="p">];</span>
    <span class="o">//</span> <span class="n">add</span> <span class="n">each</span> <span class="n">team</span> <span class="n">member</span> <span class="n">to</span> <span class="n">Classroom</span>
    <span class="n">this</span><span class="o">.</span><span class="n">team</span> <span class="o">=</span> <span class="n">team</span><span class="p">;</span>
    <span class="n">this</span><span class="o">.</span><span class="n">team</span><span class="o">.</span><span class="n">forEach</span><span class="p">(</span><span class="n">team</span> <span class="o">=&gt;</span> <span class="p">{</span> <span class="n">team</span><span class="o">.</span><span class="n">setRole</span><span class="p">(</span><span class="s2">&quot;Team&quot;</span><span class="p">);</span> <span class="n">this</span><span class="o">.</span><span class="n">classroom</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">team</span><span class="p">);</span> <span class="p">});</span>
    <span class="o">//</span> <span class="n">build</span> <span class="n">json</span><span class="o">/</span><span class="n">string</span> <span class="nb">format</span> <span class="n">of</span> <span class="n">Classroom</span>
    <span class="n">this</span><span class="o">.</span><span class="n">json</span> <span class="o">=</span> <span class="p">[];</span>
    <span class="n">this</span><span class="o">.</span><span class="n">classroom</span><span class="o">.</span><span class="n">forEach</span><span class="p">(</span><span class="n">person</span> <span class="o">=&gt;</span> <span class="n">this</span><span class="o">.</span><span class="n">json</span><span class="o">.</span><span class="n">push</span><span class="p">(</span><span class="n">person</span><span class="o">.</span><span class="n">toJSON</span><span class="p">()));</span>
<span class="p">}</span>

<span class="o">//</span> <span class="n">make</span> <span class="n">a</span> <span class="n">CompSci</span> <span class="n">classroom</span> <span class="kn">from</span> <span class="nn">formerly</span> <span class="n">defined</span> <span class="n">teacher</span> <span class="ow">and</span> <span class="n">team</span> <span class="n">members</span>
<span class="n">compsci</span> <span class="o">=</span> <span class="n">new</span> <span class="n">Classroom</span><span class="p">(</span><span class="n">teacher</span><span class="p">,</span> <span class="n">team</span><span class="p">);</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">



<div class="output_text output_subarea output_execute_result">
<pre>Classroom {
  teacher:
   Person { name: &#39;Mr Yeung&#39;, ghID: &#39;jm1021&#39;, job: &#39;none&#39;, role: &#39;Teacher&#39; },
  classroom:
   [ Person { name: &#39;Mr Yeung&#39;, ghID: &#39;jm1021&#39;, job: &#39;none&#39;, role: &#39;Teacher&#39; },
     Person {
       name: &#39;Ishi&#39;,
       ghID: &#39;Random-IGN&#39;,
       job: &#39;Frontend Developer&#39;,
       role: &#39;Team&#39; },
     Person {
       name: &#39;Shreyas&#39;,
       ghID: &#39;Henerystone&#39;,
       job: &#39;Scrum Master&#39;,
       role: &#39;Team&#39; },
     Person {
       name: &#39;Lily&#39;,
       ghID: &#39;lwu1822&#39;,
       job: &#39;Backend Developer&#39;,
       role: &#39;Team&#39; },
     Person {
       name: &#39;Ekam&#39;,
       ghID: &#39;Ekamjot-Kaire&#39;,
       job: &#39;DevOps&#39;,
       role: &#39;Team&#39; } ],
  team:
   [ Person {
       name: &#39;Ishi&#39;,
       ghID: &#39;Random-IGN&#39;,
       job: &#39;Frontend Developer&#39;,
       role: &#39;Team&#39; },
     Person {
       name: &#39;Shreyas&#39;,
       ghID: &#39;Henerystone&#39;,
       job: &#39;Scrum Master&#39;,
       role: &#39;Team&#39; },
     Person {
       name: &#39;Lily&#39;,
       ghID: &#39;lwu1822&#39;,
       job: &#39;Backend Developer&#39;,
       role: &#39;Team&#39; },
     Person {
       name: &#39;Ekam&#39;,
       ghID: &#39;Ekamjot-Kaire&#39;,
       job: &#39;DevOps&#39;,
       role: &#39;Team&#39; } ],
  json:
   [ &#39;{&#34;name&#34;:&#34;Mr Yeung&#34;,&#34;ghID&#34;:&#34;jm1021&#34;,&#34;job&#34;:&#34;none&#34;,&#34;role&#34;:&#34;Teacher&#34;}&#39;,
     &#39;{&#34;name&#34;:&#34;Ishi&#34;,&#34;ghID&#34;:&#34;Random-IGN&#34;,&#34;job&#34;:&#34;Frontend Developer&#34;,&#34;role&#34;:&#34;Team&#34;}&#39;,
     &#39;{&#34;name&#34;:&#34;Shreyas&#34;,&#34;ghID&#34;:&#34;Henerystone&#34;,&#34;job&#34;:&#34;Scrum Master&#34;,&#34;role&#34;:&#34;Team&#34;}&#39;,
     &#39;{&#34;name&#34;:&#34;Lily&#34;,&#34;ghID&#34;:&#34;lwu1822&#34;,&#34;job&#34;:&#34;Backend Developer&#34;,&#34;role&#34;:&#34;Team&#34;}&#39;,
     &#39;{&#34;name&#34;:&#34;Ekam&#34;,&#34;ghID&#34;:&#34;Ekamjot-Kaire&#34;,&#34;job&#34;:&#34;DevOps&#34;,&#34;role&#34;:&#34;Team&#34;}&#39; ] }</pre>
</div>

</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-python"><pre><span></span><span class="o">//</span> <span class="n">define</span> <span class="n">an</span> <span class="n">HTML</span> <span class="n">conversion</span> <span class="s2">&quot;method&quot;</span> <span class="n">associated</span> <span class="k">with</span> <span class="n">Classroom</span>
<span class="n">Classroom</span><span class="o">.</span><span class="n">prototype</span><span class="o">.</span><span class="n">_toHtml</span> <span class="o">=</span> <span class="n">function</span><span class="p">()</span> <span class="p">{</span>
    <span class="o">//</span> <span class="n">HTML</span> <span class="n">Style</span> <span class="ow">is</span> <span class="n">build</span> <span class="n">using</span> <span class="n">inline</span> <span class="n">structure</span>
    <span class="n">var</span> <span class="n">style</span> <span class="o">=</span> <span class="p">(</span>
      <span class="s2">&quot;display:inline-block;&quot;</span> <span class="o">+</span>
      <span class="s2">&quot;background:black;&quot;</span> <span class="o">+</span>
      <span class="s2">&quot;border: 2px solid grey;&quot;</span> <span class="o">+</span>
      <span class="s2">&quot;box-shadow: 0.8em 0.4em 0.4em grey;&quot;</span>
    <span class="p">);</span>
  
    <span class="o">//</span> <span class="n">HTML</span> <span class="n">Body</span> <span class="n">of</span> <span class="n">Table</span> <span class="ow">is</span> <span class="n">build</span> <span class="k">as</span> <span class="n">a</span> <span class="n">series</span> <span class="n">of</span> <span class="n">concatenations</span> <span class="p">(</span><span class="o">+=</span><span class="p">)</span>
    <span class="n">var</span> <span class="n">body</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span>
    <span class="o">//</span> <span class="n">Heading</span> <span class="k">for</span> <span class="n">Array</span> <span class="n">Columns</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;tr&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;th&gt;&lt;mark&gt;&quot;</span> <span class="o">+</span> <span class="s2">&quot;Name&quot;</span> <span class="o">+</span> <span class="s2">&quot;&lt;/mark&gt;&lt;/th&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;th&gt;&lt;mark&gt;&quot;</span> <span class="o">+</span> <span class="s2">&quot;GitHub ID&quot;</span> <span class="o">+</span> <span class="s2">&quot;&lt;/mark&gt;&lt;/th&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;th&gt;&lt;mark&gt;&quot;</span> <span class="o">+</span> <span class="s2">&quot;Role&quot;</span> <span class="o">+</span> <span class="s2">&quot;&lt;/mark&gt;&lt;/th&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;th&gt;&lt;mark&gt;&quot;</span> <span class="o">+</span> <span class="s2">&quot;Type:&quot;</span> <span class="o">+</span> <span class="s2">&quot;&lt;/mark&gt;&lt;/th&gt;&quot;</span><span class="p">;</span>
    <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;/tr&gt;&quot;</span><span class="p">;</span>
    <span class="o">//</span> <span class="n">Data</span> <span class="n">of</span> <span class="n">Array</span><span class="p">,</span> <span class="n">iterate</span> <span class="n">through</span> <span class="n">each</span> <span class="n">row</span> <span class="n">of</span> <span class="n">compsci</span><span class="o">.</span><span class="n">classroom</span> 
    <span class="k">for</span> <span class="p">(</span><span class="n">var</span> <span class="n">row</span> <span class="n">of</span> <span class="n">compsci</span><span class="o">.</span><span class="n">classroom</span><span class="p">)</span> <span class="p">{</span>
      <span class="o">//</span> <span class="n">tr</span> <span class="k">for</span> <span class="n">each</span> <span class="n">row</span><span class="p">,</span> <span class="n">a</span> <span class="n">new</span> <span class="n">line</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;tr&gt;&quot;</span><span class="p">;</span>
      <span class="o">//</span> <span class="n">td</span> <span class="k">for</span> <span class="n">each</span> <span class="n">column</span> <span class="n">of</span> <span class="n">data</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;td&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">name</span> <span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&quot;</span><span class="p">;</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;td&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">ghID</span> <span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&quot;</span><span class="p">;</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;td&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">job</span> <span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&quot;</span><span class="p">;</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;td&gt;&quot;</span> <span class="o">+</span> <span class="n">row</span><span class="o">.</span><span class="n">role</span> <span class="o">+</span> <span class="s2">&quot;&lt;/td&gt;&quot;</span><span class="p">;</span>
      <span class="o">//</span> <span class="n">tr</span> <span class="n">to</span> <span class="n">end</span> <span class="n">line</span>
      <span class="n">body</span> <span class="o">+=</span> <span class="s2">&quot;&lt;tr&gt;&quot;</span><span class="p">;</span>
    <span class="p">}</span>
  
     <span class="o">//</span> <span class="n">Build</span> <span class="ow">and</span> <span class="n">HTML</span> <span class="n">fragment</span> <span class="n">of</span> <span class="n">div</span><span class="p">,</span> <span class="n">table</span><span class="p">,</span> <span class="n">table</span> <span class="n">body</span>
    <span class="k">return</span> <span class="p">(</span>
      <span class="s2">&quot;&lt;div style=&#39;&quot;</span> <span class="o">+</span> <span class="n">style</span> <span class="o">+</span> <span class="s2">&quot;&#39;&gt;&quot;</span> <span class="o">+</span>
        <span class="s2">&quot;&lt;table&gt;&quot;</span> <span class="o">+</span>
          <span class="n">body</span> <span class="o">+</span>
        <span class="s2">&quot;&lt;/table&gt;&quot;</span> <span class="o">+</span>
      <span class="s2">&quot;&lt;/div&gt;&quot;</span>
    <span class="p">);</span>
  
  <span class="p">};</span>
  
  <span class="o">//</span> <span class="n">IJavaScript</span> <span class="n">HTML</span> <span class="n">processor</span> <span class="n">receive</span> <span class="n">parameter</span> <span class="n">of</span> <span class="n">defined</span> <span class="n">HTML</span> <span class="n">fragment</span>
  <span class="err">$$</span><span class="o">.</span><span class="n">html</span><span class="p">(</span><span class="n">compsci</span><span class="o">.</span><span class="n">_toHtml</span><span class="p">());</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">


<div class="output_html rendered_html output_subarea output_execute_result">
<div style='display:inline-block;background:black;border: 2px solid grey;box-shadow: 0.8em 0.4em 0.4em grey;'><table><tr><th><mark>Name</mark></th><th><mark>GitHub ID</mark></th><th><mark>Role</mark></th><th><mark>Type:</mark></th></tr><tr><td>Mr Yeung</td><td>jm1021</td><td>none</td><td>Teacher</td><tr><tr><td>Ishi</td><td>Random-IGN</td><td>Frontend Developer</td><td>Team</td><tr><tr><td>Shreyas</td><td>Henerystone</td><td>Scrum Master</td><td>Team</td><tr><tr><td>Lily</td><td>lwu1822</td><td>Backend Developer</td><td>Team</td><tr><tr><td>Ekam</td><td>Ekamjot-Kaire</td><td>DevOps</td><td>Team</td><tr></table></div>
</div>

</div>

</div>
</div>

</div>
    {% endraw %}

</div>
 

